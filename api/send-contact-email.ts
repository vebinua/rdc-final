import type { VercelRequest, VercelResponse } from '@vercel/node';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

async function getM365AccessToken(): Promise<string> {
  const tenantId = process.env.MICROSOFT_TENANT_ID;
  const clientId = process.env.MICROSOFT_CLIENT_ID;
  const clientSecret = process.env.MICROSOFT_CLIENT_SECRET;

  if (!tenantId || !clientId || !clientSecret) {
    throw new Error('Microsoft 365 credentials not configured');
  }

  const tokenEndpoint = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

  const params = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    scope: 'https://graph.microsoft.com/.default',
    grant_type: 'client_credentials',
  });

  const response = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('Failed to get access token:', error);
    throw new Error('Failed to authenticate with Microsoft 365');
  }

  const data = await response.json();
  return data.access_token;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message }: ContactFormData = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const senderEmail = process.env.MICROSOFT_USER_EMAIL;

    if (!senderEmail) {
      console.error('MICROSOFT_USER_EMAIL is not configured');
      return res.status(500).json({ error: 'Email service not configured' });
    }

    const emailBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #5680E9 0%, #84CEEB 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
    .field { margin-bottom: 20px; }
    .label { font-weight: bold; color: #5680E9; margin-bottom: 5px; }
    .value { padding: 10px; background: white; border-radius: 5px; border: 1px solid #e5e7eb; }
    .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">New Inquiry from RDC Corporate Website</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value">${email}</div>
      </div>
      <div class="field">
        <div class="label">Message:</div>
        <div class="value">${message.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
    <div class="footer">
      <p>This inquiry was submitted through the RDC Corporate website contact form.</p>
      <p>Reply directly to <a href="mailto:${email}">${email}</a> to respond to this inquiry.</p>
    </div>
  </div>
</body>
</html>
    `.trim();

    const accessToken = await getM365AccessToken();

    const emailPayload = {
      message: {
        subject: 'New Inquiry from RDC Corporate Website',
        body: {
          contentType: 'HTML',
          content: emailBody,
        },
        toRecipients: [
          {
            emailAddress: {
              address: 'contact@rdccorporate.com',
            },
          },
        ],
        replyTo: [
          {
            emailAddress: {
              address: email,
              name: name,
            },
          },
        ],
      },
      saveToSentItems: true,
    };

    const graphResponse = await fetch(
      `https://graph.microsoft.com/v1.0/users/${senderEmail}/sendMail`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(emailPayload),
      }
    );

    if (!graphResponse.ok) {
      const error = await graphResponse.text();
      console.error('Microsoft Graph API error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.error('Error in send-contact-email function:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

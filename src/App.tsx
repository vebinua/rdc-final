import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SkipLink from './components/SkipLink';
import SEOHead from './components/SEOHead';
import ScrollManager from './components/ScrollManager';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import FormationOfSingaporeEntities from './pages/FormationofSingaporeEntities';
import FormationOfForeignEntities from './pages/FormationofForeignEntities';
import CorporateSecretarialServices from './pages/CorporateSecretarialServices';
import AccountingTaxation from './pages/AccountingTaxation';
import CFOBPOServices from './pages/CFOBPOServices';
import PrivateClientServices from './pages/PrivateClientServices';
import PayrollServices from './pages/PayrollServices';
import AssuranceServices from './pages/AssuranceServices';
import InsuranceServices from './pages/InsuranceServices';
import VisasEmploymentPasses from './pages/VisasEmploymentPasses';
import PrivacyPolicy from './pages/PrivacyPolicy';

function AppContent() {
  const location = useLocation();
  
  // Add body class based on current route
  React.useEffect(() => {
    if (location.pathname === '/') {
      document.body.className = 'home-page';
    } else {
      document.body.className = '';
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <SkipLink />
      <Header />
      <main id="main-content" role="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/formation-singapore-entities" element={<FormationOfSingaporeEntities />} />
          <Route path="/services/formation-foreign-companies" element={<FormationOfForeignEntities />} />
          <Route path="/services/corporate-secretarial-services" element={<CorporateSecretarialServices />} />
          <Route path="/services/accounting-taxation" element={<AccountingTaxation />} />
          <Route path="/services/cfo-bpo" element={<CFOBPOServices />} />
          <Route path="/services/private-clients" element={<PrivateClientServices />} />
          <Route path="/services/payroll-services" element={<PayrollServices />} />
          <Route path="/services/assurance" element={<AssuranceServices />} />
          <Route path="/services/insurance" element={<InsuranceServices />} />
          <Route path="/services/visas-employment-passes" element={<VisasEmploymentPasses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollManager>
        <SEOHead />
        <div className="min-h-screen">
          <AppContent />
        </div>
      </ScrollManager>
    </Router>
  );
}

export default App;
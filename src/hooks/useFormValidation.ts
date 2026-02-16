import { useState, useCallback } from 'react';

interface ValidationRules {
  [key: string]: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    custom?: (value: string) => string | null;
  };
}

interface FormErrors {
  [key: string]: string;
}

interface UseFormValidationReturn {
  errors: FormErrors;
  validateField: (name: string, value: string) => boolean;
  validateForm: (formData: { [key: string]: string }) => boolean;
  clearErrors: () => void;
  clearFieldError: (name: string) => void;
}

export const useFormValidation = (rules: ValidationRules): UseFormValidationReturn => {
  const [errors, setErrors] = useState<FormErrors>({});

  const validateField = useCallback((name: string, value: string): boolean => {
    const rule = rules[name];
    if (!rule) return true;

    let error = '';

    // Required validation
    if (rule.required && !value.trim()) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }
    // Min length validation
    else if (rule.minLength && value.length < rule.minLength) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} must be at least ${rule.minLength} characters`;
    }
    // Max length validation
    else if (rule.maxLength && value.length > rule.maxLength) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} must be no more than ${rule.maxLength} characters`;
    }
    // Pattern validation
    else if (rule.pattern && !rule.pattern.test(value)) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} format is invalid`;
    }
    // Custom validation
    else if (rule.custom) {
      const customError = rule.custom(value);
      if (customError) {
        error = customError;
      }
    }

    setErrors(prev => ({
      ...prev,
      [name]: error
    }));

    return !error;
  }, [rules]);

  const validateForm = useCallback((formData: { [key: string]: string }): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(rules).forEach(fieldName => {
      const value = formData[fieldName] || '';
      const rule = rules[fieldName];

      let error = '';

      if (rule.required && !value.trim()) {
        error = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
      } else if (rule.minLength && value.length < rule.minLength) {
        error = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be at least ${rule.minLength} characters`;
      } else if (rule.maxLength && value.length > rule.maxLength) {
        error = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be no more than ${rule.maxLength} characters`;
      } else if (rule.pattern && value && !rule.pattern.test(value)) {
        error = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} format is invalid`;
      } else if (rule.custom && value) {
        const customError = rule.custom(value);
        if (customError) {
          error = customError;
        }
      }

      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [rules]);

  const clearErrors = useCallback(() => {
    setErrors({});
  }, []);

  const clearFieldError = useCallback((name: string) => {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
  }, []);

  return {
    errors,
    validateField,
    validateForm,
    clearErrors,
    clearFieldError
  };
};
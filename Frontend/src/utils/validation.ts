import { CheckoutFormData, CheckoutFormErrors } from '../types';

// Validation functions
export const validateCardNumber = (cardNumber: string): boolean => {
  const cardRegex = /^\d{10}$/;
  return cardRegex.test(cardNumber.replace(/\s/g, ''));
};

export const validateExpiryDate = (expiryDate: string): boolean => {
  const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
  if (!expiryRegex.test(expiryDate)) return false;
  
  const [month, year] = expiryDate.split('/');
  const currentYear = new Date().getFullYear() % 100;
  const currentMonth = new Date().getMonth() + 1;
  
  const expYear = parseInt(year, 10);
  const expMonth = parseInt(month, 10);
  
  if (expYear < currentYear) return false;
  if (expYear === currentYear && expMonth < currentMonth) return false;
  
  return true;
};

export const validateCVV = (cvv: string): boolean => {
  const cvvRegex = /^\d{3}$/;
  return cvvRegex.test(cvv);
};

export const validatePinCode = (pinCode: string): boolean => {
  const zipRegex = /^\d+$/;
  return zipRegex.test(pinCode);
};

// Helper function to validate text fields (no empty spaces)
export const validateTextField = (value: string, fieldName: string): string => {
  if (!value.trim()) {
    return `${fieldName} is required`;
  }
  if (/^\s+$/.test(value)) {
    return `${fieldName} should not contain only spaces`;
  }
  return '';
};

// Email validation
export const validateEmail = (email: string): string => {
  if (!email.trim()) {
    return 'Email is required';
  }
  if (/\s/.test(email)) {
    return 'Email should not contain spaces';
  }
  if (email !== email.toLowerCase()) {
    return 'Email should be in lowercase letters only';
  }
  if (!/^[a-z0-9.]+@[a-z]+\.com$/.test(email)) {
    return 'Email format: lowercase letters/numbers/dots before @, domain must end with .com';
  }
  return '';
};

// Main form validation function
export const validateCheckoutForm = (customerInfo: CheckoutFormData): CheckoutFormErrors => {
  const errors: CheckoutFormErrors = {};

  // Text field validations (no empty spaces allowed)
  const nameError = validateTextField(customerInfo.name, 'Name');
  const emailError = validateEmail(customerInfo.email);
  const addressError = validateTextField(customerInfo.address, 'Address');
  const cityError = validateTextField(customerInfo.city, 'City');

  if (nameError) errors.name = nameError;
  if (emailError) errors.email = emailError;
  if (addressError) errors.address = addressError;
  if (cityError) errors.city = cityError;

  // PIN Code validation
  if (!customerInfo.pinCode.trim()) {
    errors.pinCode = 'PIN code is required';
  } else if (!validatePinCode(customerInfo.pinCode)) {
    errors.pinCode = 'PIN code must contain only numbers';
  }

  // Card Number validation
  if (!customerInfo.cardNumber.trim()) {
    errors.cardNumber = 'Card number is required';
  } else if (!validateCardNumber(customerInfo.cardNumber)) {
    errors.cardNumber = 'Card number must be 10 digits';
  }

  // Expiry Date validation
  if (!customerInfo.expiryDate.trim()) {
    errors.expiryDate = 'Expiry date is required';
  } else if (!validateExpiryDate(customerInfo.expiryDate)) {
    errors.expiryDate = 'Please enter a valid expiry date (MM/YY)';
  }

  // CVV validation
  if (!customerInfo.cvv.trim()) {
    errors.cvv = 'CVV is required';
  } else if (!validateCVV(customerInfo.cvv)) {
    errors.cvv = 'CVV must be 3 digits';
  }

  return errors;
};














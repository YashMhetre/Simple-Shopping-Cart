export const formatCardNumber = (value: string): string => {
  return value.replace(/\D/g, '').slice(0, 10);
};

export const formatExpiryDate = (value: string): string => {
  // Remove all non-digits
  const cleaned = value.replace(/\D/g, '');
  
  // Add slash after 2 digits
  if (cleaned.length >= 2) {
    return cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
  }
  
  return cleaned;
};

export const formatCVV = (value: string): string => {
  return value.replace(/\D/g, '').slice(0, 3);
};

export const formatpinCode = (value: string): string => {
  return value.replace(/\D/g, '').slice(0, 6);
};

export const formatTextField = (value: string): string => {
  return value.replace(/^\s+/, ''); // Remove leading spaces only
};

// Handle input change for different field types
export const handleFieldChange = (name: string, value: string): string => {
  switch (name) {
    case 'cardNumber':
      return formatCardNumber(value);
    case 'expiryDate':
      return formatExpiryDate(value);
    case 'cvv':
      return formatCVV(value);
    case 'pinCode':
      return formatpinCode(value);
    case 'name':
    case 'email':
    case 'address':
    case 'city':
      return formatTextField(value);
    default:
      return value;
  }
};
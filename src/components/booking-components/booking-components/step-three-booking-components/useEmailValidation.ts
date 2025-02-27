'use client'

import { useState } from 'react';

export const useEmailValidation = () => {
  const [emailError, setEmailError] = useState<string>('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return emailRegex.test(email.toLowerCase());
  };

  const checkEmail = (email: string): string => {
    if (!email) {
      return 'Email is required';
    }
    if (!validateEmail(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  return {
    emailError,
    setEmailError,
    validateEmail,
    checkEmail,
  };
}; 
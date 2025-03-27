const ValidationFormObject = {
  validateName: (name) => {
      const nameRegex = /^[a-zA-Z][a-zA-Z\s]{1,49}$/;
      if (name.length < 2) {
          return { isValid: false, error: 'Name cannot be less than 2 letters' };
      }
      if (!nameRegex.test(name)) {
          return { isValid: false, error: 'Name should not have any symbols' };
      }
      return { isValid: true, error: null };
  },

  validatePass: (password) => {
      const passwordRegex = {
          minLength: 8,
          maxLength: 128,
          hasUpperCase: /[A-Z]/,
          hasLowerCase: /[a-z]/,
          hasSpecialChar: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
      };

      if (password.length < passwordRegex.minLength) {
          return { isValid: false, error: 'Password should be at least 8 characters long' };
      }
      if (password.length > passwordRegex.maxLength) {
          return { isValid: false, error: 'Password should be less than 128 characters' };
      }
      if (!passwordRegex.hasLowerCase.test(password)) {
          return { isValid: false, error: 'Password should have at least one lowercase letter (a-z)' };
      }
      if (!passwordRegex.hasUpperCase.test(password)) {
          return { isValid: false, error: 'Password should have at least one uppercase letter (A-Z)' };
      }
      if (!passwordRegex.hasSpecialChar.test(password)) {
          return { isValid: false, error: 'Password should have at least one special character (!@#$%^&*)' };
      }
      return { isValid: true, error: null };
  },

  validateEmail: (email) => {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (email.length > 254) {
          return { isValid: false, error: 'Email is too long' };
      }
      if (!emailRegex.test(email)) {
          return { isValid: false, error: 'Invalid email format (e.g., name@example.com)' };
      }
      return { isValid: true, error: null };
  },
};

export default ValidationFormObject;

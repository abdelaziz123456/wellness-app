export const hasUpperAndLower = (str: string): boolean => {
  const hasUpperCase = /[A-Z]/.test(str);
  const hasLowerCase = /[a-z]/.test(str);
  return hasUpperCase && hasLowerCase;
};

export const containsSymbol = (str: string) => {
  const regex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\-\\/]/; // Matches common symbols
  const regex2 = /\d/; // Matches any digit (0-9)

  return regex.test(str) || regex2.test(str);
};

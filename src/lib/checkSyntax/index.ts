export const isNotNumber = (value: string) => {
return !/^\d*$/.test(value)
}
export const isValidVinhUniEmail = (email: string): boolean => {
  // Basic email validation pattern with specific domain check
  const emailPattern = /^[a-zA-Z0-9._-]+@vinhuni\.edu\.vn$/;
  return emailPattern.test(email);
}

export const isValidEmail = (email: string): boolean => {
  // Regular expression for email validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}
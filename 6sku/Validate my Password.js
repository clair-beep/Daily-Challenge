function validPass(password) {
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;

  if (password.length < 4 || password.length > 19) {
    return 'INVALID';
  }

  if (!alphanumericRegex.test(password)) {
    return 'INVALID';
  }

  if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
    return 'INVALID';
  }

  return 'VALID';
}

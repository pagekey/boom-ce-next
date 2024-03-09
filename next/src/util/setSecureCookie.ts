/**
 * Securely set a cookie on the client to prevent cross-site scripting attacks.
 * @param name The name of the cookie.
 * @param value The value of the cookie to securely save.
 * @param days The number of days before the cookie expires.
 */
export const setSecureCookie = (name: string, value: string, days: number) => {
  let expires = '';

  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }

  document.cookie = name + '=' + (value || '') + expires + '; path=/; Secure; SameSite=Strict';
};

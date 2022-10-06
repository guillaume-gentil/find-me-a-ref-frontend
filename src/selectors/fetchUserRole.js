/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

export function fetchUserRole(token) {
  try {
    const decoded = jwt_decode(token);
    return decoded.roles;
  }
  catch {
    return false;
  }
}

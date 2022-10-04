/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

export function findUserMail(token) {
  // Todo Decode state token and return mail

  try {
    const decoded = jwt_decode(token);
    return decoded.username;
  }
  catch {
    return false;
  }
}

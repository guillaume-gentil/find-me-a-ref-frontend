import axios from 'axios';
import { saveJwtToken, sendAuthCredentials } from '../actions/login';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'SEND_AUTH_CREDENTIALS':
      axios.get('http://localhost/React/01-find-me-a-ref-back/public/api/v1/login_check', action.logObject,
        // {
        //   headers: {
        //     Authorization: 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NjQ0MzkyNzksImV4cCI6MTY2NDQ2ODA3OSwicm9sZXMiOlsiUk9MRV9SRUZFUkVFIl0sInVzZXJuYW1lIjoiZ2F1dGhpZXIuZnJlZGVyaWNAbGV0ZWxsaWVyLm9yZyJ9.ZT88kf0b2juIQRn82JHQ4dO9LWD2tlp01cz6ogwVkoUPsd8ZPP5Rh1_Llm3Bv9nhYH7feP_q_CkVzKsyh8vxPKSDV7e7iz4KLMirFqIsccmxitFff26NrwPuhDRNqthX70WSQsVndWDXU6_PMt0tfSMm0I3ZEm0bauf2s78NRgGAMTiREBgYJBaxox-S4-FMBX2W6Ja_DyLEcRmkcVl5h4OyB-hND7dyAbLuEV6P7_FKc8LD-oyO5ODVWBRbDaM3JQ8n1VGHzTwpSlVAd3oW3C28SLoRjbHRNqcpCf7W4vSm8ykH_W7sGbI7fEtJV5EB5JpVJRiyH1EomXYi8o-DyA',
        //   },
        // },
      )
        .then((response) => {
          // TODO : replace this value by api json web token
          console.log(response);
          const token = 'fake_token';
          store.dispatch(saveJwtToken(token));
          sessionStorage.setItem('jwtToken', token);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
  }
  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};
export default authMiddleware;

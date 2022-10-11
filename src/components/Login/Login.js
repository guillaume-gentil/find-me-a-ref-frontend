// import :
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleMobile,
  toggleLoginButton,
  changeToRegistration,
  changeUsernameInput,
  changePasswordInput,
  sendAuthCredentials,
  disconnectUser,
  sendRegistration,
} from '../../actions/login';
import { findUserMail } from '../../selectors/findUserMail';
import './styles.scss';

// component :
function Login() {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.jwtToken);
  const userMail = findUserMail(token);

  function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
  }
  function checkRole(arr) {
    const found = arr.find((item) => item !== 'ROLE_REFEREE' && item !== 'ROLE_TEAMHEAD');
    if (found) {
      return false;
    }
    return true;
  }
  function verifyPwd(password, pwdCheck) {
    if (password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)) {
      return password === pwdCheck;
    }
    return false;
  }

  function handleResize() {
    if (parseInt(window.innerWidth, 10) < 768) {
      dispatch(toggleMobile(true));
    }
    else {
      dispatch(toggleMobile(false));
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
  }, []);

  let classSection = 'login__section';
  let classButton = 'login__button';

  const mobile = useSelector((state) => state.isMobile);
  const isLoginOpen = useSelector((state) => state.isLoginOpen);
  const isRegistration = useSelector((state) => state.isRegistration);
  const isLogged = useSelector((state) => state.isLogged);

  if (isLoginOpen) {
    classSection += ' open';
  }
  if (mobile) {
    classButton += ' absolute';
  }
  else {
    classSection += ' absolute';
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    const usernameValue = e.target.querySelector('#email').value;
    const passValue = e.target.querySelector('#password').value;
    const logObject = { username: usernameValue, password: passValue };
    dispatch(sendAuthCredentials(logObject));
  }

  function handleRegistrationSubmit(e) {
    e.preventDefault();
    const pwdCheck = e.target.querySelector('#pwdVerification').value;
    const requestObject = {
      firstname: e.target.querySelector('#firstname').value,
      lastname: e.target.querySelector('#name').value,
      email: e.target.querySelector('#email').value,
      roles: [e.target.querySelector('input[name="userRole"]:checked').value],
      password: e.target.querySelector('#password').value,
    };
    if (isEmptyOrSpaces(requestObject.firstname)
      || isEmptyOrSpaces(requestObject.lastname)
      || isEmptyOrSpaces(requestObject.email)
      || isEmptyOrSpaces(requestObject.password)
      || !checkRole(requestObject.roles)
      || !verifyPwd(requestObject.password, pwdCheck)) {
      const message = 'Veuillez renseigner tous les champs.';
      // dispatch(setErrorMessage(message));
      console.log('erreur');
    }
    else {
      dispatch(sendRegistration(requestObject));
    }
  }

  const textButton = isLogged ? 'Déconnexion' : 'Connexion';

  return (
    <div className={classSection}>
      <button
        type="button"
        className={classButton}
        onClick={() => {
          if (!isLogged) {
            dispatch(toggleLoginButton());
          }
          else {
            dispatch(disconnectUser());
          }
        }}
      >{textButton}
      </button>
      {isLogged && (
        <p className="login__welcome">Bienvenue {userMail.split('@')[0]} </p>
      )}
      {isLoginOpen
      && isRegistration && (
        <section className="login">
          <form action="" method="POST" className="login__form" onSubmit={handleRegistrationSubmit}>
            <label htmlFor="lastname" className="login__label">Nom
              <input type="text" id="name" placeholder="ex : Ateur" />
            </label>
            <label htmlFor="firstname" className="login__label">Prénom
              <input type="text" id="firstname" name="firstname" placeholder="ex : Nordine" />
            </label>
            <label htmlFor="email" className="login__label">Adresse mail
              <input type="mail" id="email" placeholder="Nordine.Ateur@monmail.com" />
            </label>
            <label htmlFor="password" className="login__label">Mot de passe
              <input type="password" id="password" placeholder="mot de passe" />
            </label>
            <label htmlFor="pwdVerification" className="login__label">Retapez votre mot de passe
              <input type="password" id="pwdVerification" placeholder="mot de passe" />
            </label>
            <label htmlFor="userRole" className="login__label">Rôle
              <div className="login__form--radio">
                <input type="radio" id="userReferee" value="ROLE_REFEREE" name="userRole" />
                <label htmlFor="userReferee" className="login_label" name="userRole">Arbitre</label>
              </div>
              <div className="login__form--radio">
                <input type="radio" id="userTeamhead" value="ROLE_TEAMHEAD" name="userRole" />
                <label htmlFor="userTeamhead" className="login_label" name="userRole">Chef d'équipe</label>
              </div>
            </label>
            <label htmlFor="licenceId" className="login__label">Numéro de licence
              <input type="text" id="licenceId" placeholder="ex : Nateur" />
            </label>
            <button type="submit" className="login__submit">Je m'inscris</button>
          </form>
        </section>
      )}
      {isLoginOpen && !isRegistration && (
      <section className="login">
        <form action="" method="POST" className="login__form" onSubmit={handleLoginSubmit}>
          <label htmlFor="email" className="login__label">Adresse Mail
            <input type="email" id="email" name="email" autoComplete="username" onChange={(e) => dispatch(changeUsernameInput(e.target.value))} />
          </label>
          <label htmlFor="password" className="login__label">Mot de passe
            <input type="password" id="password" name="password" autoComplete="current-password" onChange={(e) => dispatch(changePasswordInput(e.target.value))} />
          </label>
          <button type="submit" className="login__submit">Se connecter</button>
        </form>
        <button
          type="button"
          className="login__signup"
          onClick={() => {
            dispatch(changeToRegistration());
          }}
        >Nouvelle inscription
        </button>
        <a href="" className="login__forgot">Mot de passe oublié ?</a>
      </section>
      )}
    </div>
  );
}

// export :
export default Login;

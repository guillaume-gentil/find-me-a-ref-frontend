// import :
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
import {
  setPassModalHidden, setPassModalVisible, colorizeModal, uncolorizeModal,
} from '../../actions/ui_actions';
import { findUserMail } from '../../selectors/findUserMail';
import './styles.scss';

// component :
function Login() {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.jwtToken);
  const userMail = findUserMail(token);
  const isPassModalVisible = useSelector((state) => state.isPassModalVisible);

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
  function checkWithUppercase(password) {
    if (password.match(/.*[A-Z]/)) {
      return true;
    }
    return false;
  }
  function checkWithLetters(password) {
    if (password.match(/.{8,}/)) {
      return true;
    }
    return false;
  }
  function checkWithDigit(password) {
    if (password.match(/.*\d.*/)) {
      return true;
    }
    return false;
  }
  function checkWithSymbol(password) {
    if (password.match(/.*\W.*/)) {
      return true;
    }
    return false;
  }

  function handlePassChange(e) {
    if (checkWithUppercase(e.target.value)) {
      dispatch(colorizeModal('uppercase'));
    }
    else {
      dispatch(uncolorizeModal('uppercase'));
    }
    if (checkWithDigit(e.target.value)) {
      dispatch(colorizeModal('digit'));
    }
    else {
      dispatch(uncolorizeModal('digit'));
    }
    if (checkWithSymbol(e.target.value)) {
      dispatch(colorizeModal('symbol'));
    }
    else {
      dispatch(uncolorizeModal('symbol'));
    }
    if (checkWithLetters(e.target.value)) {
      dispatch(colorizeModal('letter'));
    }
    else {
      dispatch(uncolorizeModal('letter'));
    }
  }
  const checkPwdUppercase = useSelector((state) => state.checkPwdUppercase);
  const checkPwdDigit = useSelector((state) => state.checkPwdDigit);
  const checkPwdSymbol = useSelector((state) => state.checkPwdSymbol);
  const checkPwdLetters = useSelector((state) => state.checkPwdLetters);

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

  function handlePassFocus() {
    dispatch(setPassModalVisible());
  }

  function handlePassBlur() {
    dispatch(setPassModalHidden());
  }

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
    const licence = e.target.querySelector('#licenceId').value;
    const requestObject = {
      firstname: e.target.querySelector('#firstname').value,
      lastname: e.target.querySelector('#name').value,
      email: e.target.querySelector('#email').value,
      // roles: e.target.querySelector('input[name="userRole"]:checked') !== null ? [e.target.querySelector('input[name="userRole"]:checked').value] : [],
      roles: ['ROLE_REFEREE'],
      password: e.target.querySelector('#password').value,
    };
    if (isEmptyOrSpaces(requestObject.firstname)
      || isEmptyOrSpaces(requestObject.lastname)
      || isEmptyOrSpaces(requestObject.email)
      || isEmptyOrSpaces(requestObject.password)
      || isEmptyOrSpaces(licence)
      // || !checkRole(requestObject.roles)
      || !verifyPwd(requestObject.password, pwdCheck)) {
      // add errors
      if (isEmptyOrSpaces(requestObject.firstname)) {
        e.target.querySelector('#firstname').classList.add('error');
      }
      else {
        e.target.querySelector('#firstname').classList.remove('error');
      }
      if (isEmptyOrSpaces(requestObject.lastname)) {
        e.target.querySelector('#name').classList.add('error');
      }
      else {
        e.target.querySelector('#name').classList.remove('error');
      }
      if (isEmptyOrSpaces(requestObject.email)) {
        e.target.querySelector('#email').classList.add('error');
      }
      else {
        e.target.querySelector('#email').classList.remove('error');
      }
      if (isEmptyOrSpaces(requestObject.password)) {
        e.target.querySelector('#password').classList.add('error');
      }
      else {
        e.target.querySelector('#password').classList.remove('error');
      }
      if (isEmptyOrSpaces(licence)) {
        e.target.querySelector('#licenceId').classList.add('error');
      }
      else {
        e.target.querySelector('#licenceId').classList.remove('error');
      }
      // if (requestObject.roles.length < 1) {
      //   e.target.querySelector('.login__form--radio').classList.add('error');
      // }
      // else {
      //   e.target.querySelector('.login__form--radio').classList.remove('error');
      // }
      if (!verifyPwd(requestObject.password, pwdCheck)) {
        e.target.querySelector('#pwdVerification').classList.add('error');
      }
      else {
        e.target.querySelector('#pwdVerification').classList.remove('error');
      }
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
      <>
        <Link to="/profile" className="login__profile">
          <button
            type="button"
            className={`${classButton} profile`}
          >
            Profil
          </button>
        </Link>
        <p className="login__welcome">Bienvenue {userMail.split('@')[0]} </p>
      </>
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
            <label htmlFor="password" className="login__label modal__anchor">Mot de passe
              <input type="password" autoComplete="" id="password" placeholder="mot de passe" onFocus={handlePassFocus} onBlur={handlePassBlur} onChange={handlePassChange} />
              {isPassModalVisible && (
              <div className="password__modal">
                <ul className="password__modal--list">
                  <li className={checkPwdLetters ? 'password__modal--item highlight' : 'password__modal--item'}>8 caractères minimum</li>
                  <li className={checkPwdUppercase ? 'password__modal--item highlight' : 'password__modal--item'}>1 majuscule minimum</li>
                  <li className={checkPwdDigit ? 'password__modal--item highlight' : 'password__modal--item'}>1 chiffre minimum</li>
                  <li className={checkPwdSymbol ? 'password__modal--item highlight' : 'password__modal--item'}>1 symbole minimum (@$!%*#?&)</li>
                </ul>
              </div>
              )}
            </label>
            <label htmlFor="pwdVerification" className="login__label">Retapez votre mot de passe
              <input type="password" autoComplete="" id="pwdVerification" placeholder="mot de passe" />
            </label>
            {/* <label htmlFor="userRole" className="login__label">Rôle
              <div className="login__form--radio">
                <input type="radio" id="userReferee" value="ROLE_REFEREE" name="userRole" />
                <label htmlFor="userReferee" className="login_label" name="userRole">Arbitre</label>
              </div>
              <div className="login__form--radio">
                <input type="radio" id="userTeamhead" value="ROLE_TEAMHEAD" name="userRole" />
                <label htmlFor="userTeamhead" className="login_label" name="userRole">Chef d'équipe</label>
              </div>
            </label> */}
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

        {/* TODO create a feature to get back your forgotten pwd  :  <a href="" className="login__forgot">Mot de passe oublié ?</a> */}
      </section>
      )}
    </div>
  );
}

// export :
export default Login;

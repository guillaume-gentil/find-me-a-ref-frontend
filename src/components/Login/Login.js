// import :
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMobile, toggleLoginButton } from '../../actions/login';
import './styles.scss';

// component :
function Login() {
  const dispatch = useDispatch();

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
  if (isLoginOpen) {
    classSection += ' open';
  }
  if (mobile) {
    classButton += ' absolute';
  }
  else {
    classSection += ' absolute';
  }

  return (
    <div className={classSection}>
      <button
        type="button"
        className={classButton}
        onClick={() => {
          dispatch(toggleLoginButton());
        }}
      >Connexion
      </button>
      {isLoginOpen
      && (
      <section className="login">
        <form action="" className="login__form">
          <label htmlFor="email" className="login__label">Adresse Mail
            <input type="email" id="email" name="email" autoComplete="username" />
          </label>
          <label htmlFor="password" className="login__label">Mot de passe
            <input type="password" id="password" name="password" autoComplete="current-password" />
          </label>
          <button type="button" className="login__submit">Se connecter</button>
        </form>
        <button type="button" className="login__signup">Nouvelle inscription</button>
        <a href="" className="login__forgot">Mot de passe oublié ?</a>
      </section>
      )}
    </div>
  );
}

// export :
export default Login;

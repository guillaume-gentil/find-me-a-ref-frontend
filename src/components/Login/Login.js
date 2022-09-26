// import :
import './styles.scss';

// component :
function Login() {
  return (
    <>
      <button type="button" className="login__button">Connexion</button>
      <section className="login">
        <form action="" className="login__form">
          <label htmlFor="mailAdress" className="login__label">Adresse Mail
            <input type="email" id="mailAdress" name="email" />
          </label>
          <label htmlFor="password" className="login__label">Mot de passe
            <input type="password" id="password" name="password" />
          </label>
          <button type="button" className="login__submit">Se connecter</button>
        </form>
        <button type="button" className="login__signup">Nouvelle inscription</button>
        <a href="">Mot de passe oublié ?</a>
      </section>
    </>
  );
}

// export :
export default Login;

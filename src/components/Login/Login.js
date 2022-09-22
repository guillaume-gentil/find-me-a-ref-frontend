// import :
import './styles.scss';

// component :
function Login() {
  return (
    <section>
      <form action="">
        <label htmlFor="mailAdress">Adresse Mail</label>
        <input type="email" id="mailAdress" name="email" />
        <label htmlFor="password">Mot de passe</label>
        <input type="password" id="password" name="password" />
      </form>
      <button type="button">Nouvelle inscription</button>
      <a href="">Mot de passe oublié ?</a>
    </section>
  );
}

// export :
export default Login;

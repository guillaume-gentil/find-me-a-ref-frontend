// import :
import './styles.scss';
import whiteLogo from '../../assets/img/logo-ffrs-blanc.png';

// import components :

// component :
function Header() {
  return (
    <section className="topPartHeader">
      <div className="topPartHeader__headerTitle">
        <h1>Find Me A Ref</h1>
        <h2>Solution d'arbitrage</h2>
      </div>
      <div className="topPartHeader__buttons">
        <button className="topPartHeader__menu">Menu</button>
        <button className="topPartHeader__login">Connexion</button>
      </div>
      <img className="topPartHeader__ffLogo" src={whiteLogo} alt="" />
    </section>
  );
}

// export :
export default Header;

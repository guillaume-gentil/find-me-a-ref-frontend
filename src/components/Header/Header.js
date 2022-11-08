// import :
import Navbar from 'src/components/Navbar/Navbar';
import './styles.scss';
import whiteLogo from '../../assets/img/logo-ffrs-blanc.png';

// import components :

// component :
function Header() {
  return (
    <section className="topPartHeader">
      <div className="topPartHeader__headerTitle">
        <h1>Find Me A Ref</h1>
        <h2 className="topPartHeader__headerTitle--subtitle">Solution d'arbitrage</h2>
        <h2 className="topPartHeader__headerTitle--subtitle">ROLLER HOCKEY</h2>
      </div>
      <div className="topPartHeader__buttons">
        <Navbar />
      </div>
      <img className="topPartHeader__ffLogo" src={whiteLogo} alt="" />
    </section>
  );
}

// export :
export default Header;

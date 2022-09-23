// import :
import './styles.scss';
import whiteLogo from '../../assets/img/logo-ffrs-blanc.png';

// import components :

// component :
function Header() {
  return (
    <section className="topPartHeader">
      <div className="topPartHeader--headerTitle">
        <h1>FIND ME A REF !</h1>
        <h2>Solution d'arbitrage</h2>
      </div>
      {/* <Navbar />
      <Login /> */}
      <img className="topPartHeader--ffLogo" src={whiteLogo} alt="" />
    </section>
  );
}

// export :
export default Header;

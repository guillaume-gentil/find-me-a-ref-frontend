// import :
import './styles.scss';
import refereex from 'src/assets/img/refereex.png';

// component :
function FourOhFour() {
  return (
    <section className="display404">
      <img src={refereex} alt="referee signing no" />
      <h2 className="page404">erreur 404</h2>
      <p className="page404">Ceci n'est pas une route valable.</p>
      <img src={refereex} alt="referee signing no" />
    </section>
  );
}
// export :
export default FourOhFour;

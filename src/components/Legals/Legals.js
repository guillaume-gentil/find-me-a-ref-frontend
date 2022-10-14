// import :
import './styles.scss';
import logoFfrs from 'src/assets/img/logo_ffrs.png';
import logoArbitre from 'src/assets/img/logoArbitre.png';
import { useSelector } from 'react-redux';

// component :
function Legals() {
  const hidePartners = useSelector((state) => state.isLoginOpen);
  return (
    <div className="informations">
      <section className="legals">
        <h2 className="legals__title">MENTIONS LÉGALES</h2>
        <p className="legals__text">Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site Find Me a Ref ! l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>
        <h3 className="legals__subtitle">Edition du site</h3>
        <p className="legals__text">Le présent site, accessible à l’URL www.findmearef/rollerhockey.fr (le « Site »), est édité par :</p>
        <p className="legals__text">Le Pôle développement de l’arbitrage du roller hockey, ayant son siège situé à 6, Boulevard du Président Franklin Roosevelt – CS11742 – 33080 Bordeaux Cedex France, représentée par Yohann Labreux dûment habilité(e)</p>
        <h3 className="legals__subtitle">Hébergement</h3>
        <p className="legals__text">Le Site est hébergé par la société OVH, situé 2 rue Kellermann – 59100 Roubaix – France, (contact téléphonique ou email : +33972101010).</p>
        <h3 className="legals__subtitle">Nous contacter</h3>
        <p className="legals__text">Par téléphone : +33556336565</p>
        <p className="legals__text">Par email : findmearef@gmail.com</p>
        <p className="legals__text">Par courrier : 6, Boulevard du Pdt Franklin Roosevelt CS11742 33080 Bordeaux Cedex France</p>
      </section>
      {!hidePartners
      && (
      <section className="partners">
        <h1 className="partners__title">Nos partenaires</h1>
        <a href="https://ffroller-skateboard.fr/les-disciplines/roller_hockey/">
          <img className="legals__link--img" src={logoFfrs} alt="logo de la fédération" />
        </a>
        <a href="http://rollerhockey.fr/#/"><img className="legals__link--img" src={logoArbitre} alt="logo de la fédération" /></a>
      </section>
      )}
    </div>
  );
}

// export :
export default Legals;

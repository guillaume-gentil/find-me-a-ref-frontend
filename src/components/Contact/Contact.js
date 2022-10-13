// import :
import './styles.scss';
import Arnaud from 'src/assets/img/Arnaud.jpg';
import Guillaume from 'src/assets/img/Guillaume.jpg';
import Loic from 'src/assets/img/Loic.jpg';
import Tomas from 'src/assets/img/Tomas.jpg';

// component :
function Contact() {
  return (
    <section className="contact">
      <div className="contact__main">
        <h1 className="contact__title">Contact</h1>
        <p>En cas de problème, merci de bien vouloir contacter l'administrateur du site :
          findmearef@gmail.com
        </p>
      </div>
      <div className="contact__team">
        <h1 className="contact__title">Notre Equipe :</h1>
        <ul>
          <li>Product Owner <br /><strong>Arnaud J</strong> <img src={Arnaud} alt="Arnaud" className="contact__img" /></li>
          <li>Scrum Master <br /><strong>Loïc G</strong> <img src={Loic} alt="Loic" className="contact__img" /></li>
          <li>Tech-Lead Back et GitMaster <br /><strong>Guillaume G</strong> <img src={Guillaume} alt="Guillaume" className="contact__img" /></li>
          <li>Tech-Lead Front <br /><strong>Tomas C</strong> <img src={Tomas} alt="Tomas" className="contact__img" /></li>
        </ul>
      </div>
    </section>
  );
}

// export :
export default Contact;

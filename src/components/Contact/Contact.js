// import :
import './styles.scss';
import Arnaud from 'src/assets/img/Arnaud.jpg';
import Guillaume from 'src/assets/img/Guillaume.jpg';
import Loic from 'src/assets/img/Loic.jpg';
import Tomas from 'src/assets/img/Tomas.jpg';
import { GitHub } from 'react-feather';

// component :
function Contact() {
  return (
    <section className="contact">
      <div className="contact__main">
        <h1 className="contact__title">Contact</h1>
        <p className="contact__text">En cas de problème, merci de bien vouloir contacter l'administrateur du site :
          contact@rollerhockey.fr
        </p>
      </div>
      <div className="contact__team">
        <h1 className="contact__title">Notre Equipe :</h1>
        <ul>
          <li>Product Owner <br /><strong>Arnaud J</strong> <a href="https://www.linkedin.com/in/arnaud-joguet/" target="_blank" rel="noreferrer"><img src={Arnaud} alt="Arnaud" className="contact__img" /></a><br /> <a href="https://github.com/Arnaud-Joguet" target="_blank" rel="noreferrer"><GitHub /></a></li>
          <li>Scrum Master <br /><strong>Loïc G</strong> <a href="https://www.linkedin.com/in/lguegan-developpeur-frontend/" target="_blank" rel="noreferrer"><img src={Loic} alt="Loic" className="contact__img" /></a><br /> <a href="https://github.com/Runebearer" target="_blank" rel="noreferrer"><GitHub /></a></li>
          <li>Tech-Lead Back et GitMaster <br /><strong>Guillaume G</strong><a href="https://www.linkedin.com/in/ggentil/" target="_blank" rel="noreferrer"> <img src={Guillaume} alt="Guillaume" className="contact__img" /></a><br /><a href="https://github.com/guillaume-gentil" target="_blank" rel="noreferrer"><GitHub /></a></li>
          <li>Tech-Lead Front <br /><strong>Tomas C</strong><a href="https://www.linkedin.com/in/tomas-conan/" target="_blank" rel="noreferrer"> <img src={Tomas} alt="Tomas" className="contact__img" /></a><br /> <a href="https://github.com/TomasConan" target="_blank" rel="noreferrer"><GitHub /></a></li>
        </ul>
        <p className="contact__paragraph">Retrouvez L'équipe du Studio Cacahouète sur LinkedIn et Github</p>
      </div>
    </section>
  );
}

// export :
export default Contact;

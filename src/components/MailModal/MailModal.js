// import :
import './styles.scss';
import { useDispatch } from 'react-redux';
import { closeMailConfirm } from '../../actions/ui_actions';

// component :
function MailModal() {
  const dispatch = useDispatch();

  return (
    <section className="mailModal">
      <p className="mailModal__message">Nous vous remercions, votre mail a bien été confirmé.</p>
      <button className="mailModal__button" type="button" onClick={() => dispatch(closeMailConfirm())}>Continuer à naviguer</button>
    </section>

  );
}

// export :

export default MailModal;

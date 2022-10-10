import { CornerUpLeft } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles.scss';
import { setErrorMessage } from '../../../actions/ui_actions';
import { sendArenaForm } from '../../../actions/arenas_management';

function ArenaForm() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.jwtToken);
  const error = useSelector((state) => state.errorMessage);

  function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const requestObject = {
      name: e.target.querySelector('#name').value,
      address: e.target.querySelector('#address').value,
      zipcode: e.target.querySelector('#zipCode').value,
      token: token,
    };
    // eslint-disable-next-line max-len
    if (isEmptyOrSpaces(requestObject.name) || isEmptyOrSpaces(requestObject.address) || isEmptyOrSpaces(requestObject.zipcode)) {
      const message = 'Veuillez renseigner tous les champs.';
      dispatch(setErrorMessage(message));
    }
    else {
      dispatch(sendArenaForm(requestObject));
    }
  }

  return (
    <div className="arena-form">
      <section className="arena-form__top">
        <h3 className="arena-form__title">
          Gymnases
        </h3>
        <Link to="/admin/arenas">
          <button type="button" className="user-form__back"><CornerUpLeft /></button>
        </Link>
      </section>
      <form action="" method="POST" className="arena-form__form" onSubmit={handleFormSubmit}>
        <fieldset className="arena-form__fieldset">
          <label htmlFor="name">
            Nom
            <input type="text" name="name" id="name" />
          </label>
          <label htmlFor="address">
            Adresse
            <input type="text" name="address" id="address" />
          </label>
          <label htmlFor="zipCode">
            Code Postal
            <input type="number" name="zipCode" id="zipCode" />
          </label>
          {error && <p className="error_message">Erreur : Veuillez remplir tous les champs</p>}
          <button type="submit" className="arena-form__submit">Valider</button>
        </fieldset>
      </form>
    </div>
  );
}

export default ArenaForm;

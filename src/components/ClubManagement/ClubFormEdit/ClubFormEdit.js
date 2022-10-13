import { CornerUpLeft } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import '../styles.scss';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { setErrorMessage } from '../../../actions/ui_actions';
import { fetchClubInfos, sendEditClubForm } from '../../../actions/clubs_management';

function ClubForm() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const token = useSelector((state) => state.jwtToken);
  const error = useSelector((state) => state.errorMessage);

  useEffect(() => {
    dispatch(fetchClubInfos({ id, token }));
  }, []);

  const club = useSelector((state) => state.editedComponent);
  function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const requestObject = {
      name: e.target.querySelector('#name').value,
      address: e.target.querySelector('#address').value,
      zip_code: e.target.querySelector('#zipCode').value,
      id: club.id,
      token: token,
    };
    // eslint-disable-next-line max-len
    if (isEmptyOrSpaces(requestObject.name) || isEmptyOrSpaces(requestObject.address) || isEmptyOrSpaces(requestObject.zip_code)) {
      const message = 'Veuillez renseigner tous les champs.';
      dispatch(setErrorMessage(message));
    }
    else {
      dispatch(sendEditClubForm(requestObject));
    }
  }

  if (club) {
    return (
      <div className="club-form">
        <section className="club-form__top">
          <h3 className="club-form__title">
            Clubs
          </h3>
          <Link to="/admin/clubs">
            <button
              type="button"
              className="club-form__back"
            ><CornerUpLeft />
            </button>
          </Link>
        </section>
        <form action="" method="POST" className="club-form__form" onSubmit={handleFormSubmit}>
          <fieldset className="club-form__fieldset">
            <label htmlFor="name">
              Nom
              <input type="text" name="name" id="name" defaultValue={club.name} />
            </label>
            <label htmlFor="address">
              Adresse
              <input type="text" name="address" id="address" defaultValue={club.address} />
            </label>
            <label htmlFor="zipCode">
              Code Postal
              <input type="number" name="zipCode" id="zipCode" defaultValue={club.zipCode} />
            </label>
            {error && <p className="error_message">Erreur : Veuillez remplir tous les champs</p>}
            <button type="submit" className="club-form__submit">Valider</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default ClubForm;

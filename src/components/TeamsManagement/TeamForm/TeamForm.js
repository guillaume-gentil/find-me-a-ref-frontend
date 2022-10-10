import { CornerUpLeft } from 'react-feather';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../styles.scss';
import { useEffect } from 'react';
import { fetchCategories, fetchClubs } from 'src/actions/filters';
import { setErrorMessage } from '../../../actions/ui_actions';
import { sendTeamForm } from '../../../actions/teams_management';

function TeamForm() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.jwtToken);
  const error = useSelector((state) => state.errorMessage);
  const categories = useSelector((state) => state.categories);
  const clubs = useSelector((state) => state.clubs);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchClubs());
  }, []);

  function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const requestObject = {
      name: e.target.querySelector('#name').value,
      club: e.target.querySelector('#club').value,
      category: e.target.querySelector('#category').value,
      token: token,
    };
    // eslint-disable-next-line max-len
    if (isEmptyOrSpaces(requestObject.name) || isEmptyOrSpaces(requestObject.club) || isEmptyOrSpaces(requestObject.category)) {
      const message = 'Veuillez renseigner tous les champs.';
      dispatch(setErrorMessage(message));
    }
    else {
      dispatch(sendTeamForm(requestObject));
    }
  }

  return (
    <div className="team-form">
      <section className="team-form__top">
        <h3 className="team-form__title">
          Equipes
        </h3>
        <Link to="/admin/teams">
          <button type="button" className="user-form__back"><CornerUpLeft /></button>
        </Link>
      </section>
      <form action="" method="POST" className="team-form__form" onSubmit={handleFormSubmit}>
        <fieldset className="team-form__fieldset">
          <label htmlFor="name">
            Nom
            <input type="text" name="name" id="name" />
          </label>
          <label htmlFor="club">
            Club
            <select name="club" id="club">
              <option value="">-</option>
              {clubs.map(
                (club) => (
                  <option
                    key={club.id}
                    value={club.id}
                  >{club.name}
                  </option>
                ),
              )}
            </select>
          </label>
          <label htmlFor="category">
            Catégorie
            <select name="category" id="category">
              <option value="">-</option>
              {categories.map(
                (category) => (
                  <option
                    key={category.id}
                    value={category.id}
                  >{category.name}
                  </option>
                ),
              )}
            </select>
          </label>
          {error && <p className="error_message">Erreur : Veuillez remplir tous les champs</p>}
          <button type="submit" className="team-form__submit">Valider</button>
        </fieldset>
      </form>
    </div>
  );
}

export default TeamForm;

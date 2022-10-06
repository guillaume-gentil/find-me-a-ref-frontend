import { CornerUpLeft } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import '../styles.scss';
// import { setErrorMessage } from '../../../actions/ui_actions';

function GameForm() {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.jwtToken);
  const error = '';

  function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
  }
  // function checkRole(arr) {
  //   const found = arr.find((item) => item !== 'ROLE_REFEREE' && item !== 'ROLE_TEAMHEAD' && item !== 'ROLE_ADMIN');
  //   if (found) {
  //     return false;
  //   }
  //   return true;
  // }

  // function handleFormSubmit(e) {
  //   e.preventDefault();
  //   const requestObject = {
  //     firstname: e.target.querySelector('#firstname').value,
  //     lastname: e.target.querySelector('#lastname').value,
  //     email: e.target.querySelector('#email').value,
  //     roles: [e.target.querySelector('#role').value],
  //     password: e.target.querySelector('#password').value,
  //     token: token,
  //   };
  //   // eslint-disable-next-line max-len
  //   if (isEmptyOrSpaces(requestObject.firstname) || isEmptyOrSpaces(requestObject.lastname) || isEmptyOrSpaces(requestObject.email) || isEmptyOrSpaces(requestObject.password) || !checkRole(requestObject.roles)) {
  //     const message = 'Veuillez renseigner tous les champs.';
  //     dispatch(setErrorMessage(message));
  //   }
  //   else {
  //     dispatch(sendgameForm(requestObject));
  //   }
  // }

  return (
    <div className="game-form">
      <section className="game-form__top">
        <h3 className="game-form__title">
          Matchs
        </h3>
        <button type="button" className="game-form__back"><CornerUpLeft /></button>
      </section>
      <form action="" className="game-form__form">
        <fieldset className="game-form__fieldset">
          <label htmlFor="date">
            Date
            <input type="date" name="date" id="date" />
          </label>
          <label htmlFor="team1">
            Equipe 1
            <input type="text" name="team1" id="team1" />
          </label>
          <label htmlFor="team2">
            Equipe 2
            <input type="text" name="team2" id="team2" />
          </label>
          <label htmlFor="referee1">
            Arbitre 1
            <input type="text" name="referee1" id="referee1" />
          </label>
          <label htmlFor="referee2">
            Arbitre 2
            <input type="number" name="referee2" id="referee2" />
          </label>
        </fieldset>
        <fieldset className="game-form__fieldset">
          <label htmlFor="arena">
            Gymnase
            <input type="text" name="arena" id="arena" />
          </label>
          <label htmlFor="type">
            Type de match
            <input type="text" name="type" id="type" />
          </label>
          {error && <p className="error_message">Erreur : Veuillez remplir tous les champs</p>}
          <button type="submit" className="game-form__submit">Valider</button>
        </fieldset>
      </form>
    </div>
  );
}

export default GameForm;

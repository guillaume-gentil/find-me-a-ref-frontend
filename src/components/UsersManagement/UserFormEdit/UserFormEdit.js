import { useEffect } from 'react';
import { CornerUpLeft } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { setErrorMessage } from '../../../actions/ui_actions';
import {
  changeInputAddress,
  changeInputEmail,
  changeInputFirstname,
  changeInputLastname,
  changeInputLevel,
  changeInputLicense,
  changeInputPass,
  changeInputZipcode,
  fetchUser,
  sendEditUserForm,
} from '../../../actions/users_management';

function UserForm() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const token = useSelector((state) => state.jwtToken);
  const error = useSelector((state) => state.errorMessage);
  const user = useSelector((state) => state.editedComponent);
  const userObj = { token, id };

  useEffect(() => {
    dispatch(fetchUser(userObj));
  }, []);

  function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
  }
  function checkRole(arr) {
    const found = arr.find((item) => item !== 'ROLE_REFEREE' && item !== 'ROLE_TEAMHEAD' && item !== 'ROLE_ADMIN');
    if (found) {
      return false;
    }
    return true;
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const requestObject = {
      firstname: e.target.querySelector('#firstname').value,
      lastname: e.target.querySelector('#lastname').value,
      email: e.target.querySelector('#email').value,
      roles: [e.target.querySelector('#role').value],
      password: e.target.querySelector('#password').value,
      id: id,
      token: token,
    };
    // eslint-disable-next-line max-len
    if (isEmptyOrSpaces(requestObject.firstname) || isEmptyOrSpaces(requestObject.lastname) || isEmptyOrSpaces(requestObject.email) || isEmptyOrSpaces(requestObject.password) || !checkRole(requestObject.roles)) {
      const message = 'Veuillez renseigner tous les champs.';
      dispatch(setErrorMessage(message));
    }
    else {
      dispatch(sendEditUserForm(requestObject));
    }
  }

  if (user) {
    return (
      <div className="user-form">
        <section className="user-form__top">
          <h3 className="user-form__title">
            Utilisateurs
          </h3>
          <Link to="/admin/users">
            <button type="button" className="user-form__back"><CornerUpLeft /></button>
          </Link>
        </section>
        <form action="" className="user-form__form" onSubmit={handleFormSubmit}>
          <fieldset className="user-form__fieldset">
            <label htmlFor="lastname">
              Nom
              <input type="text" name="lastname" id="lastname" value={user.lastname} onChange={(e) => dispatch(changeInputLastname(e.target.value))} />
            </label>
            <label htmlFor="firstname">
              Prénom
              <input type="text" name="firstname" id="firstname" value={user.firstname} onChange={(e) => dispatch(changeInputFirstname(e.target.value))} />
            </label>
            <label htmlFor="email">
              Email
              <input type="email" name="email" id="email" value={user.email} onChange={(e) => dispatch(changeInputEmail(e.target.value))} />
            </label>
            <label htmlFor="license_id">
              Numéro de licence
              <input type="number" name="license_id" id="license_id" value={user.licenceId} onChange={(e) => dispatch(changeInputLicense(e.target.value))} />
            </label>
            <label htmlFor="level">
              Niveau
              <input type="text" name="level" id="level" value={user.level} onChange={(e) => dispatch(changeInputLevel(e.target.value))} />
            </label>
          </fieldset>
          <fieldset className="user-form__fieldset">
            <label htmlFor="address">
              Adresse Complète
              <input type="text" name="address" id="address" value={user.address} onChange={(e) => dispatch(changeInputAddress(e.target.value))} />
            </label>
            <label htmlFor="zipCode">
              Code Postal
              <input type="number" name="zipCode" id="zipCode" value={user.zipCode} onChange={(e) => dispatch(changeInputZipcode(e.target.value))} />
            </label>
            <label htmlFor="role">
              Role
              <select name="role" id="role" defaultValue={user.roles[0]}>
                <option value="ROLE_REFEREE">Arbitre</option>
                <option value="ROLE_TEAMHEAD">Responsable d'equipe</option>
                <option value="ROLE_ADMIN">Administrateur</option>
              </select>
            </label>
            {error && <p className="error_message">Erreur : Veuillez remplir tous les champs</p>}
            <button type="submit" className="user-form__submit">Valider</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default UserForm;

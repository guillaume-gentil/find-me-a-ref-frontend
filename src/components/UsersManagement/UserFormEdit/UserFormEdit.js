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
  const userFormInputLastname = useSelector((state) => state.userFormInputLastname);
  const userFormInputEmail = useSelector((state) => state.userFormInputEmail);
  const userFormInputFirstname = useSelector((state) => state.userFormInputFirstname);
  const userFormInputAddress = useSelector((state) => state.userFormInputAddress);
  const userFormInputZipcode = useSelector((state) => state.userFormInputZipcode);
  const userFormInputLicense = useSelector((state) => state.userFormInputLicense);
  const userFormInputLevel = useSelector((state) => state.userFormInputLevel);

  useEffect(() => {
    dispatch(fetchUser(userObj));
  }, []);

  useEffect(() => {
    try {
      dispatch(changeInputFirstname(user.firstname));
      dispatch(changeInputLastname(user.lastname));
      dispatch(changeInputEmail(user.email));
      dispatch(changeInputAddress(user.address));
      dispatch(changeInputLevel(user.level));
      dispatch(changeInputLicense(user.licenceId));
      dispatch(changeInputZipcode(user.zipCode));
    }
    catch (error) {
      console.log('error');
    }
  }, [user]);

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
    console.log(user);
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
              <input type="text" name="lastname" id="lastname" value={userFormInputLastname} onChange={(e) => dispatch(changeInputLastname(e.target.value))} />
            </label>
            <label htmlFor="firstname">
              Prénom
              <input type="text" name="firstname" id="firstname" value={userFormInputFirstname} onChange={(e) => dispatch(changeInputFirstname(e.target.value))} />
            </label>
            <label htmlFor="email">
              Email
              <input type="email" name="email" id="email" value={userFormInputEmail} onChange={(e) => dispatch(changeInputEmail(e.target.value))} />
            </label>
            <label htmlFor="license_id">
              Numéro de licence
              <input type="number" name="license_id" id="license_id" value={userFormInputLicense} onChange={(e) => dispatch(changeInputLicense(e.target.value))} />
            </label>
            <label htmlFor="level">
              Niveau
              <input type="text" name="level" id="level" value={userFormInputLevel} onChange={(e) => dispatch(changeInputLevel(e.target.value))} />
            </label>
          </fieldset>
          <fieldset className="user-form__fieldset">
            <label htmlFor="address">
              Adresse Complète
              <input type="text" name="address" id="address" value={userFormInputAddress} onChange={(e) => dispatch(changeInputAddress(e.target.value))} />
            </label>
            <label htmlFor="zipCode">
              Code Postal
              <input type="number" name="zipCode" id="zipCode" value={userFormInputZipcode} onChange={(e) => dispatch(changeInputZipcode(e.target.value))} />
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

import { useEffect } from 'react';
import { CornerUpLeft } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUserData, updateUserData } from '../../actions/profile';
import {
  setProfileEdit,
  setPassModalHidden,
  setPassModalVisible,
  colorizeModal,
  uncolorizeModal,
} from '../../actions/ui_actions';
import './styles.scss';

function UserProfile() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.jwtToken);
  const user = useSelector((state) => state.currentUser);
  const editState = useSelector((state) => state.isProfileOnEdit);
  const isAdmin = useSelector((state) => state.userRoles.includes('ROLE_ADMIN'));
  const isPassModalVisible = useSelector((state) => state.isPassModalVisible);

  useEffect(() => {
    dispatch(fetchUserData(token));
  }, []);

  function formatRole(role) {
    if (role === 'ROLE_ADMIN') {
      return 'Administrateur';
    }
    if (role === 'ROLE_REFEREE') {
      return 'Arbitre';
    }
    if (role === 'ROLE_TEAMHEAD') {
      return 'Responsable d\'équipe';
    }
  }

  function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
  }
  // function checkRole(arr) {
  //   const found = arr.find((item) => item !== 'ROLE_REFEREE' && item !== 'ROLE_TEAMHEAD');
  //   if (found) {
  //     return false;
  //   }
  //   return true;
  // }
  function verifyPwd(password, pwdCheck) {
    if (password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)) {
      return password === pwdCheck;
    }
    return false;
  }
  function handleEditClick() {
    dispatch(setProfileEdit(true));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const pwd = e.target.querySelector('#password').value;
    const pwdCheck = e.target.querySelector('#pwdVerification').value;
    const addressValue = e.target.querySelector('#address').value;
    const phone = e.target.querySelector('#phone').value;
    const requestObject = {
      userData: {
        // Mandatory data
        firstname: e.target.querySelector('#firstname').value,
        lastname: e.target.querySelector('#lastname').value,
        email: e.target.querySelector('#email').value,
      },
      token: token,
    };
    if (!isEmptyOrSpaces(pwd)) {
      if (verifyPwd(pwd, pwdCheck)) {
        requestObject.userData = { ...requestObject.userData, password: pwd };
      }
    }
    if (!isEmptyOrSpaces(addressValue)) {
      requestObject.userData = { ...requestObject.userData, address: addressValue };
    }
    if (!isEmptyOrSpaces(phone)) {
      requestObject.userData = { ...requestObject.userData, phoneNumber: phone };
    }
    if (isEmptyOrSpaces(requestObject.userData.firstname)
      || isEmptyOrSpaces(requestObject.userData.lastname)
      || isEmptyOrSpaces(requestObject.userData.email)) {
      const message = 'Veuillez renseigner tous les champs.';
      // dispatch(setErrorMessage(message));
      console.log('erreur');
    }
    else {
      dispatch(updateUserData(requestObject));
      dispatch(setProfileEdit(false));
    }
  }

  function checkWithUppercase(password) {
    if (password.match(/.*[A-Z]/)) {
      return true;
    }
    return false;
  }
  function checkWithLetters(password) {
    if (password.match(/.{8,}/)) {
      return true;
    }
    return false;
  }
  function checkWithDigit(password) {
    if (password.match(/.*\d.*/)) {
      return true;
    }
    return false;
  }
  function checkWithSymbol(password) {
    if (password.match(/.*\W.*/)) {
      return true;
    }
    return false;
  }

  function handlePassChange(e) {
    if (checkWithUppercase(e.target.value)) {
      dispatch(colorizeModal('uppercase'));
    }
    else {
      dispatch(uncolorizeModal('uppercase'));
    }
    if (checkWithDigit(e.target.value)) {
      dispatch(colorizeModal('digit'));
    }
    else {
      dispatch(uncolorizeModal('digit'));
    }
    if (checkWithSymbol(e.target.value)) {
      dispatch(colorizeModal('symbol'));
    }
    else {
      dispatch(uncolorizeModal('symbol'));
    }
    if (checkWithLetters(e.target.value)) {
      dispatch(colorizeModal('letter'));
    }
    else {
      dispatch(uncolorizeModal('letter'));
    }
  }

  function handlePassFocus() {
    dispatch(setPassModalVisible());
  }

  function handlePassBlur() {
    dispatch(setPassModalHidden());
  }

  const checkPwdUppercase = useSelector((state) => state.checkPwdUppercase);
  const checkPwdDigit = useSelector((state) => state.checkPwdDigit);
  const checkPwdSymbol = useSelector((state) => state.checkPwdSymbol);
  const checkPwdLetters = useSelector((state) => state.checkPwdLetters);

  if (user) {
    return (
      <section className="user-profile">
        <div className="user-profile__header">
          <h2 className="user-profile__title">
            Profil
          </h2>
          <Link to="/">
            <button
              type="button"
              className="user-profile__back"
            ><CornerUpLeft />
            </button>
          </Link>
        </div>

        {!editState
        && (
        <div className="user-profile__infos">
          <div className="user-profile__infos--fieldset">
            <div className="user-profile__item">
              <p className="user-profile__label">Nom</p>
              <p className="user-profile__info">{user.lastname}</p>
            </div>
            <div className="user-profile__item">
              <p className="user-profile__label">Prénom</p>
              <p className="user-profile__info">{user.firstname}</p>
            </div>
            <div className="user-profile__item">
              <p className="user-profile__label">Email</p>
              <p className="user-profile__info">{user.email}</p>
            </div>
            <div className="user-profile__item">
              <p className="user-profile__label">Adresse</p>
              <p className="user-profile__info">{user.address}</p>
            </div>
          </div>
          <div className="user-profile__infos--fieldset">
            <div className="user-profile__item">
              <p className="user-profile__label">Numero de téléphone</p>
              <p className="user-profile__info">{user.phoneNumber}</p>
            </div>
            <div className="user-profile__item">
              <p className="user-profile__label">Role</p>
              <p className="user-profile__info">{formatRole(user.roles[0])}</p>
            </div>
            <button type="button" className="user-profile__button" onClick={handleEditClick}>Editer</button>
          </div>
        </div>
        )}

        {editState
        && (
        <div className="user-profile__form">
          <form action="" onSubmit={handleFormSubmit}>
            <fieldset>
              <label htmlFor="lastname" className="user-profile__label">
                Nom
                <input type="text" name="lastname" id="lastname" defaultValue={user.lastname} />
              </label>
              <label htmlFor="firstname" className="user-profile__label">
                Prénom
                <input type="text" name="firstname" id="firstname" defaultValue={user.firstname} />
              </label>
              <label htmlFor="email" className="user-profile__label">
                Email
                <input type="email" name="email" id="email" defaultValue={user.email} />
              </label>
              <label htmlFor="address" className="user-profile__label">
                Adresse
                <input type="text" name="address" id="address" defaultValue={user.address} />
              </label>
            </fieldset>
            <fieldset>
              <label htmlFor="phone" className="user-profile__label">
                Numero de téléphone
                <input type="number" name="phone" id="phone" defaultValue={user.phoneNumber} />
              </label>
              {!isAdmin
            && (
              <label htmlFor="role" className="user-profile__label">
                Role
                <select name="role" id="role" defaultValue={user.roles[0]}>
                  <option value="ROLE_REFEREE">Arbitre</option>
                  <option value="ROLE_TEAMHEAD">Responsable d'equipe</option>
                </select>
              </label>
            )}
              <label htmlFor="password" className="user-profile__label modal__anchor">Mot de passe
                <input type="password" autoComplete="" id="password" placeholder="mot de passe" onFocus={handlePassFocus} onBlur={handlePassBlur} onChange={handlePassChange} />
                {isPassModalVisible && (
                <div className="password__modal">
                  <ul className="password__modal--list">
                    <li className={checkPwdLetters ? 'password__modal--item highlight' : 'password__modal--item'}>8 caractères minimum</li>
                    <li className={checkPwdUppercase ? 'password__modal--item highlight' : 'password__modal--item'}>1 majuscule minimum</li>
                    <li className={checkPwdDigit ? 'password__modal--item highlight' : 'password__modal--item'}>1 chiffre minimum</li>
                    <li className={checkPwdSymbol ? 'password__modal--item highlight' : 'password__modal--item'}>1 symbole minimum (@$!%*#?&)</li>
                  </ul>
                </div>
                )}
              </label>
              <label htmlFor="pwdVerification" className="user-profile__label">Retapez votre mot de passe
                <input type="password" autoComplete="" id="pwdVerification" placeholder="mot de passe" />
              </label>
              <button type="submit" className="user-profile__button">Valider</button>
            </fieldset>
          </form>
        </div>
        )}
      </section>
    );
  }
}

export default UserProfile;

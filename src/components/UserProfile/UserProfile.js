import { useEffect } from 'react';
import { CornerUpLeft } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUserData } from '../../actions/profile';
import './styles.scss';

function UserProfile() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.jwtToken);
  const user = useSelector((state) => state.currentUser);
  const editState = false;
  const isAdmin = false;

  useEffect(() => {
    dispatch(fetchUserData(token));
  }, []);

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
              <p className="user-profile__info">{user.roles[0]}</p>
            </div>
          </div>
        </div>
        )}

        {editState
        && (
        <div className="user-profile__form">
          <form action="">
            <fieldset>
              <label htmlFor="lastname">
                Nom
                <input type="text" name="lastname" id="lastname" />
              </label>
              <label htmlFor="firstname">
                Prénom
                <input type="text" name="firstname" id="firstname" />
              </label>
              <label htmlFor="email">
                Email
                <input type="email" name="email" id="email" />
              </label>
              <label htmlFor="address">
                Adresse
                <input type="text" name="address" id="address" />
              </label>
            </fieldset>
            <fieldset>
              <label htmlFor="phone">
                Numero de téléphone
                <input type="number" name="phone" id="phone" />
              </label>
              {!isAdmin
            && (
              <label htmlFor="role">
                Role
                <select name="role" id="role" defaultValue={user.roles[0]}>
                  <option value="ROLE_REFEREE">Arbitre</option>
                  <option value="ROLE_TEAMHEAD">Responsable d'equipe</option>
                </select>
              </label>
            )}
              <label htmlFor="password">
                Mot de passe
                <input type="password" name="password" id="password" />
              </label>
            </fieldset>
          </form>
        </div>
        )}
      </section>
    );
  }
}

export default UserProfile;

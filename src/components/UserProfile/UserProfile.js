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

  useEffect(() => {
    dispatch(fetchUserData(token));
  }, []);

  if (user) {
    return (
      <section className="user-profile">
        Hello {`${user.firstname} ${user.lastname}`}
        {/* TODO faire un truc de ces données */}
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
          Informations
        </div>
        )}
        {editState
        && (
        <div className="user-profile__form">
          <form action="">
            <label htmlFor="name">
              Nom
              <input type="text" name="name" id="name" />
            </label>
          </form>
        </div>
        )}
      </section>
    );
  }
}

export default UserProfile;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../../actions/profile';
import './styles.scss';

function UserProfile() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.jwtToken);
  const user = useSelector((state) => state.currentUser);

  useEffect(() => {
    dispatch(fetchUserData(token));
  }, []);

  if (user) {
    return (
      <section className="user-profile">
        Hello {`${user.firstname} ${user.lastname}`}
      </section>
    );
  }
}

export default UserProfile;

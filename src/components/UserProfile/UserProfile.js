import { useDispatch } from 'react-redux';
import './styles.scss';

function UserProfile() {
  const dispatch = useDispatch();

  // TODO Get user data by ID

  return (
    <section className="user-profile">
      Hello World
    </section>
  );
}

export default UserProfile;

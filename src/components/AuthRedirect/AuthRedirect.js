import { useSelector } from 'react-redux';
import './styles.scss';

function AuthRedirect() {
  const isModalOpen = useSelector((state) => state.isMailModalOpen);

  return (
    <div className="redirect">
      <p>Redirecting...</p>
      <p>If this takes too much time, click on <a href="#">this link</a></p>
    </div>

  );
}

export default AuthRedirect;

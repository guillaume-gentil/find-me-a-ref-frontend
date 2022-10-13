import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { openMailConfirm } from '../../actions/ui_actions';
import './styles.scss';

function AuthRedirect() {
  const isModalOpen = useSelector((state) => state.isMailModalOpen);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openMailConfirm());
  }, []);

  return (
    <div className="redirect">
      <p>Redirecting...</p>
      {isModalOpen
        && <Navigate to="/" replace />}
      <p>If this takes too much time, click on <a href="#">this link</a></p>
    </div>

  );
}

export default AuthRedirect;

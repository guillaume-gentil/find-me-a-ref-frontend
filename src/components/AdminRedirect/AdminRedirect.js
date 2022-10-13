import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { setAdminNav } from '../../actions/ui_actions';

function AdminRedirect() {
  const dispatch = useDispatch();
  dispatch(setAdminNav());
  return (
    <Navigate to="/admin/users" replace />
  );
}

export default AdminRedirect;

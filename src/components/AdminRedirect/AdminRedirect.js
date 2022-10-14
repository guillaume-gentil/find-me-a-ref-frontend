import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { setAdminNav } from '../../actions/ui_actions';

function AdminRedirect() {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.adminNav);
  useEffect(() => {
    dispatch(setAdminNav());
  }, []);
  if (admin) {
    return (
      <Navigate to="/admin/users" replace />
    );
  }
}

export default AdminRedirect;

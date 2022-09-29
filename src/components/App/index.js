// == Import
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

import Games from 'src/components/Games/Games';
import Contact from 'src/components/Contact/Contact';
import Commitment from 'src/components/Commitment/Commitment';
import { useEffect } from 'react';
import { saveJwtToken } from '../../actions/login';
import Filters from '../Filters/Filters';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Legals from '../Legals/Legals';
import './styles.scss';
import { removeLoading } from '../../actions/ui_actions';

// Component :
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem('jwtToken');
    try {
      const decoded = jwt_decode(token);
      if (decoded.exp * 1000 > Date.now()) {
        dispatch(saveJwtToken(token));
      }
    }
    catch {
      sessionStorage.removeItem('jwtToken');
    }
    finally {
      dispatch(removeLoading());
    }
  }, []);

  const isLoading = useSelector((state) => state.isLoading);
  const hideFilters = useSelector((state) => state.isLoginOpen);
  const isLogged = useSelector((state) => state.isLogged);

  return (
    <div className="app">
      <Header />
      {!isLoading && (
      <>
        <Routes>
          <Route
            path="/"
            element={hideFilters ? (
              <Games />
            ) : (
              <>
                <Filters />
                <Games />
              </>
            )}
          />
          <Route
            path="/contact"
            element={
              <Contact />
          }
          />
          <Route
            path="/mentions-legales"
            element={
              <Legals />
          }
          />
          <Route
            path="/engagement"
            element={
            isLogged
              ? <Commitment />
              : <Navigate to="/" replace /> // TODO create 404/403
          }
          />
        </Routes>
        <Login />
        <Footer />
      </>
      )}
    </div>

  );
}

// == Export
export default App;

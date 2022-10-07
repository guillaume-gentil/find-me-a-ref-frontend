// Import
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

// Import components :
import Games from 'src/components/Games/Games';
import Contact from 'src/components/Contact/Contact';
import Commitment from 'src/components/Commitment/Commitment';
import Filters from 'src/components/Filters/Filters';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';
import Login from 'src/components/Login/Login';
import Legals from 'src/components/Legals/Legals';
import FourOhFour from 'src/components/FourOhFour/FourOhFour';
import AdminRedirect from 'src/components/AdminRedirect/AdminRedirect';
import UsersManagement from '../UsersManagement/UsersManagement';
import GamesManagement from '../GamesManagement/GamesManagement';
import './styles.scss';

// Import actions :
import { fetchGames } from '../../actions/games';
import { saveJwtToken, setUserRoles } from '../../actions/login';
import { fetchUserRole } from '../../selectors/fetchUserRole';

// Component :
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem('jwtToken');
    try {
      const decoded = jwt_decode(token);
      if (decoded.exp * 1000 > Date.now()) {
        dispatch(saveJwtToken(token));
        dispatch(setUserRoles(fetchUserRole(token)));
      }
    }
    catch {
      sessionStorage.removeItem('jwtToken');
    }
    finally {
      dispatch(fetchGames());
    }
  }, []);

  // Allow the filters to hide when login/registration is open :
  const hideFilters = useSelector((state) => state.isLoginOpen);
  const isGamesLoaded = useSelector((state) => state.isGamesLoaded);
  const isLogged = useSelector((state) => state.isLogged);
  const isAdmin = useSelector((state) => state.userRoles.includes('ROLE_ADMIN'));

  return (
    <div className="app">
      <Header />
      <Login />
      {isGamesLoaded && (
      <Routes>
        <Route
          path="/"
          element={hideFilters ? (
            <>
              <Games />
              <Footer />
            </>
          ) : (
            <>
              <Filters />
              <Games />
              <Footer />
            </>
          )}
        />
        <Route
          path="/contact"
          element={(
            <>
              <Contact />
              <Footer />
            </>
          )}
        />
        <Route
          path="/mentions-legales"
          element={(
            <>
              <Legals />
              <Footer />
            </>
          )}
        />
        <Route
          path="/engagement/:id"
          element={
            isLogged
              ? (
                <>
                  <Commitment />
                  <Footer />
                </>
              )
              : <Navigate to="/403" replace />
          }
        />
        <Route
          path="/admin"
          element={
            isAdmin
              ? <AdminRedirect />
              : <Navigate to="/403" replace />
            }
        />
        <Route
          path="/admin/users"
          element={
            isAdmin
              ? <UsersManagement />
              : <Navigate to="/403" replace />
            }
        />
        <Route
          path="/admin/games"
          element={
            isAdmin
              ? <GamesManagement />
              : <Navigate to="/403" replace />
            }
        />
        <Route
          path="/admin/clubs"
          element={
            isAdmin
              ? <div />
              : <Navigate to="/403" replace />
            }
        />
        <Route
          path="/admin/teams"
          element={
            isAdmin
              ? <div />
              : <Navigate to="/403" replace />
            }
        />
        <Route
          path="/admin/arena"
          element={
            isAdmin
              ? <div />
              : <Navigate to="/403" replace />
            }
        />
        <Route
          path="*"
          element={(
            <>
              <FourOhFour />
              <Footer />
            </>
          )}
        />
      </Routes>
      )}
    </div>

  );
}

// Export
export default App;

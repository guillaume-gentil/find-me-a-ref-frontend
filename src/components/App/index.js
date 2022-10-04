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
import './styles.scss';

// Import actions :
import { fetchGames } from '../../actions/games';
import { saveJwtToken } from '../../actions/login';

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
      dispatch(fetchGames());
    }
  }, []);

  // Allow the filters to hide when login/registration is open :
  const hideFilters = useSelector((state) => state.isLoginOpen);
  const isGamesLoaded = useSelector((state) => state.isGamesLoaded);
  const isLogged = useSelector((state) => state.isLogged);

  return (
    <div className="app">
      <Header />
      {isGamesLoaded && (
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
            path="/engagement/:id"
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

// Export
export default App;

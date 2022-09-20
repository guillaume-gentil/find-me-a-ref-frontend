// == Import
import { useDispatch } from 'react-redux';
import { testLink } from '../../actions/test';
import reactLogo from './react-logo.svg';
import './styles.css';

// == Composant
function App() {
  const dispatch = useDispatch();
  dispatch(testLink());
  return (
    <div className="app">
      <img src={reactLogo} alt="react logo" />
      <h1>Composant : App</h1>
    </div>
  );
}

// == Export
export default App;

// import :
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCategories,
  fetchTeams,
  fetchClubs,
  fetchArenas,
  fetchTypes,
} from '../../actions/filters';
import store from '../../store';
import './styles.scss';

// component :
function Filters() {
  // create a const dispatch for easier useDispatch use :
  const dispatch = useDispatch();

  // fetch CATEGORIES from API :
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  // fetching the data from state :
  const categories = useSelector((state) => state.categories);

  // fetch TEAMS from API :
  useEffect(() => {
    dispatch(fetchTeams());
  }, []);
  // fetching the data from state :
  const teams = useSelector((state) => state.teams);

  // fetch CLUBS from API :
  useEffect(() => {
    dispatch(fetchClubs());
  }, []);
  // fetching the data from state :
  const clubs = useSelector((state) => state.clubs);

  // fetch ARENAS from API :
  useEffect(() => {
    dispatch(fetchArenas());
  }, []);
  // fetching the data from state :
  const arenas = useSelector((state) => state.arenas);

  // fetch TYPES from API :
  useEffect(() => {
    dispatch(fetchTypes());
  }, []);
  // fetching the data from state :
  const types = useSelector((state) => state.types);

  return (
    <section className="filters">
      <button type="button" className="filters__emergencies">Voir les urgences</button>
      <div className="filters__list">
        <button type="button" className="filters__list--items filters__button">Filtrer par :</button>
        <label htmlFor="date">
          <input type="date" name="date" id="date" className="filters__list--items" />
        </label>
        <select name="categories" id="" className="filters__list--items">
          <option value="">Catégories</option>
          {categories.map(
            (categorie) => (
              <option key={categorie.id} value={categorie.name}>{categorie.name}
              </option>
            ),
          )}
        </select>
        <select name="teams" id="" className="filters__list--items">
          <option value="">Equipes</option>
          {teams.map(
            (team) => (
              <option key={team.id} value={team.name}>{team.name}
              </option>
            ),
          )}
        </select>
        <select name="clubs" id="" className="filters__list--items">
          <option value="">Clubs</option>
          {clubs.map(
            (club) => <option key={club.id} value={club.name}>{club.name}</option>,
          )}
        </select>
        <select name="arena" id="" className="filters__list--items">
          <option value="">Gymnases</option>
          {arenas.map(
            (arena) => <option key={arena.id} value={arena.name}>{arena.name}</option>,
          )}
        </select>
        <select name="types" id="" className="filters__list--items">
          <option value="">Types de rencontres</option>
          {types.map(
            (type) => <option key={type.id} value={type.name}>{type.name}</option>,
          )}
        </select>
      </div>
    </section>
  );
}
// export :
export default Filters;

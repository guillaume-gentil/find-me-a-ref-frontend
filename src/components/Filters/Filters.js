// import :
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCategories,
  fetchTeams,
  fetchClubs,
  fetchArenas,
  fetchTypes,
  fetchUncommitedGames,
  orderGamesByDates,
  orderGamesByCategory,
  orderGamesByTeam,
  orderGamesByClub,
  orderGamesByArena,
  orderGamesByType,
} from '../../actions/filters';
import { openFilters } from '../../actions/ui_actions';
import { fetchGames } from '../../actions/games';
import store from '../../store';
import './styles.scss';

// component :
function Filters() {
  // create a const dispatch for easier useDispatch use :
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);

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

  // create a toggle for emergencies (games without referee)
  const toggleEmergencies = useSelector((state) => state.uncommited);
  const emergencyAction = toggleEmergencies ? fetchGames : fetchUncommitedGames;

  // Handler for all filters :
  function handleDateChange(e) {
    dispatch(orderGamesByDates());
  }
  function handleCategoryChange(e) {
    dispatch(orderGamesByCategory(e.target.options[e.target.selectedIndex].id));
  }
  function handleTeamChange(e) {
    dispatch(orderGamesByTeam(e.target.options[e.target.selectedIndex].id));
  }
  function handleClubChange(e) {
    dispatch(orderGamesByClub(e.target.options[e.target.selectedIndex].id));
  }

  function handleArenaChange(e) {
    dispatch(orderGamesByArena(e.target.options[e.target.selectedIndex].id));
  }

  function handleTypeChange(e) {
    dispatch(orderGamesByType(e.target.options[e.target.selectedIndex].id));
  }
  const isFilterOpen = useSelector((state) => state.isFilterOpen);

  return (
    <section className="filters">
      <button
        type="button"
        className="filters__emergencies"
        onClick={() => dispatch(emergencyAction())}
        // nouvelle route ou filter ?
      >Voir les urgences
      </button>
      <div className="filters__list">
        <button
          type="button"
          className="filters__button"
          onClick={() => dispatch(openFilters())}
        >Filtrer par :
        </button>
        <section className={isFilterOpen ? 'filters__menu open' : 'filters__menu close'}>
          <button
            type="button"
            className="filters__list--items"
            onClick={handleDateChange}
          >Trier par date
          </button>
          <select
            name="categories"
            id=""
            className="filters__list--items"
            onChange={handleCategoryChange}
          >
            <option value="">Catégories</option>
            {categories.map(
              (category) => (
                <option className="filters__list--optionValue" key={category.id} id={category.id} value={category.name}>{category.name}
                </option>
              ),
            )}
          </select>
          <select
            name="teams"
            id=""
            className="filters__list--items"
            onChange={handleTeamChange}
          >
            <option value="">Equipes</option>
            {teams.map(
              (team) => (
                <option className="filters__list--optionValue" key={team.id} id={team.id} value={team.name}>{team.name}
                </option>
              ),
            )}
          </select>
          <select
            name="clubs"
            id=""
            className="filters__list--items"
            onChange={handleClubChange}
          >
            <option value="">Clubs</option>
            {clubs.map(
              (club) => <option className="filters__list--optionValue" key={club.id} id={club.id} value={club.name}>{club.name}</option>,
            )}
          </select>
          <select
            name="arena"
            id=""
            className="filters__list--items"
            onChange={handleArenaChange}
          >
            <option value="">Gymnases</option>
            {arenas.map(
              (arena) => (
                <option
                  className="filters__list--optionValue"
                  key={arena.id}
                  id={arena.id}
                  value={arena.name}
                >
                  {arena.name}
                </option>
              ),
            )}
          </select>
          <select
            name="types"
            id=""
            className="filters__list--items"
            onChange={handleTypeChange}
          >
            <option value="">Types de rencontres</option>
            {types.map(
              (type) => <option className="filters__list--optionValue" key={type.id} id={type.id} value={type.name}>{type.name}</option>,
            )}
          </select>
        </section>
      </div>
    </section>
  );
}
// export :
export default Filters;

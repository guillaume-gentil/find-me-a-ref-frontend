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
  orderGamesByLocation,
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
  const token = useSelector((state) => state.jwtToken);

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

  // fetching the data from state :
  const locations = useSelector((state) => state.locations);

  // create a toggle for emergencies (games without referee)
  const toggleEmergencies = useSelector((state) => state.uncommited);
  const emergencyAction = toggleEmergencies ? fetchGames : fetchUncommitedGames;

  // Handler for all filters :
  function handleDateChange(e) {
    // reset of other filters :
    const resets = document.querySelectorAll('.filters__list--items:not(.button)');
    const resetsArray = Array.from(resets);

    resetsArray.forEach(
      (reset) => {
        try {
          reset.selectedIndex = 0;
        }
        catch {
          console.log('ca passe pas !');
        }
      },
    );
    dispatch(orderGamesByDates());
  }
  function handleCategoryChange(e) {
    // reset of other filters :
    const resets = document.querySelectorAll('.filters__list--items:not(.categories-filters)');
    const resetsArray = Array.from(resets);

    resetsArray.forEach(
      (reset) => {
        try {
          reset.selectedIndex = 0;
        }
        catch {
          console.log('ca passe pas !');
        }
      },
    );
    dispatch(orderGamesByCategory(e.target.options[e.target.selectedIndex].id));
  }
  function handleTeamChange(e) {
    // reset of other filters :
    const resets = document.querySelectorAll('.filters__list--items:not(.teams-filters)');
    const resetsArray = Array.from(resets);

    resetsArray.forEach(
      (reset) => {
        try {
          reset.selectedIndex = 0;
        }
        catch {
          console.log('ca passe pas !');
        }
      },
    );
    dispatch(orderGamesByTeam(e.target.options[e.target.selectedIndex].id));
  }
  function handleClubChange(e) {
    // reset of other filters :
    const resets = document.querySelectorAll('.filters__list--items:not(.clubs-filters)');
    const resetsArray = Array.from(resets);

    resetsArray.forEach(
      (reset) => {
        try {
          reset.selectedIndex = 0;
        }
        catch {
          console.log('ca passe pas !');
        }
      },
    );
    dispatch(orderGamesByClub(e.target.options[e.target.selectedIndex].id));
  }

  function handleArenaChange(e) {
    // reset of other filters :
    const resets = document.querySelectorAll('.filters__list--items:not(.arenas-filters)');
    const resetsArray = Array.from(resets);

    resetsArray.forEach(
      (reset) => {
        try {
          reset.selectedIndex = 0;
        }
        catch {
          console.log('ca passe pas !');
        }
      },
    );
    dispatch(orderGamesByArena(e.target.options[e.target.selectedIndex].id));
  }
  function handleTypeChange(e) {
    // reset of other filters :
    const resets = document.querySelectorAll('.filters__list--items:not(.types-filters)');
    const resetsArray = Array.from(resets);

    resetsArray.forEach(
      (reset) => {
        try {
          reset.selectedIndex = 0;
        }
        catch {
          console.log('ca passe pas !');
        }
      },
    );
    dispatch(orderGamesByType(e.target.options[e.target.selectedIndex].id));
  }
  function handleLocationChange(e) {
    // reset of other filters :
    const resets = document.querySelectorAll('.filters__list--items:not(.locations-filters)');
    const resetsArray = Array.from(resets);
    const radius = parseInt(e.target.options[e.target.selectedIndex].value, 10);
    resetsArray.forEach(
      (reset) => {
        try {
          reset.selectedIndex = 0;
        }
        catch {
          console.log('ca passe pas !');
        }
      },
    );
    dispatch(orderGamesByLocation({ radius, token }));
  }

  const isFilterOpen = useSelector((state) => state.isFilterOpen);

  return (
    <section className="filters">
      <button
        type="button"
        className="filters__emergencies"
        onClick={() => dispatch(emergencyAction())}
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
            className="filters__list--items button"
            onClick={handleDateChange}
          >Trier par date
          </button>
          <select
            name="categories"
            id=""
            className="filters__list--items categories-filters"
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
            className="filters__list--items teams-filters"
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
            className="filters__list--items clubs-filters"
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
            className="filters__list--items arenas-filters"
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
            className="filters__list--items types-filters"
            onChange={handleTypeChange}
          >
            <option value="">Types de rencontres</option>
            {types.map(
              (type) => <option className="filters__list--optionValue" key={type.id} id={type.id} value={type.name}>{type.name}</option>,
            )}
          </select>
          <select
            name="locations"
            id=""
            className="filters__list--items locations-filters"
            onChange={handleLocationChange}
          >
            <option value="">Rayon</option>
            {locations.map(
              (location) => <option className="filters__list--optionValue" key={location.id} id={location.id} value={location.radius}>{location.radius}</option>,
            )}
          </select>
        </section>
      </div>
    </section>
  );
}
// export :
export default Filters;

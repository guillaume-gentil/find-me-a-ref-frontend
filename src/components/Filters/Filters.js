// import :
import './styles.scss';

// component :
function Filters() {
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
          <option value="category1">categorie 1</option>
          <option value="category2">categorie 2</option>
          <option value="category3">categorie 3</option>
          <option value="category4">categorie 4</option>
        </select>
        <select name="teams" id="" className="filters__list--items">
          <option value="">Equipes</option>
          <option value="team1">Equipe 1</option>
          <option value="team2">Equipe 2</option>
          <option value="team3">Equipe 3</option>
          <option value="team4">Equipe 4</option>
        </select>
        <select name="clubs" id="" className="filters__list--items">
          <option value="">Clubs</option>
          <option value="club1">Club 1</option>
          <option value="club2">Club 2</option>
          <option value="club3">Club 3</option>
          <option value="club4">Club 4</option>
        </select>
        <select name="arena" id="" className="filters__list--items">
          <option value="">Gymnases</option>
          <option value="arena1">Gymnase 1</option>
          <option value="arena2">Gymnase 2</option>
          <option value="arena3">Gymnase 3</option>
          <option value="arena4">Gymnase 4</option>
        </select>
        <select name="types" id="" className="filters__list--items">
          <option value="">Types de rencontres</option>
          <option value="type1">type de rencontre 1</option>
          <option value="type2">type de rencontre 2</option>
          <option value="type3">type de rencontre 3</option>
          <option value="type4">type de rencontre 4</option>
        </select>
      </div>
    </section>
  );
}
// export :
export default Filters;

// import :
import './styles.scss';

// component :
function Filters() {
  return (
    <section>
      <button type="button">Voir les urgences</button>
      <button type="button">Filtrer par :</button>
      <div>
        {/* input date */}
        <select name="categories" id="">
          <option value="">Sélectionner une catégorie</option>
          <option value="category1">categorie 1</option>
          <option value="category2">categorie 2</option>
          <option value="category3">categorie 3</option>
          <option value="category4">categorie 4</option>
        </select>
        <select name="teams" id="">
          <option value="">Sélectionner une équipe</option>
          <option value="team1">Equipe 1</option>
          <option value="team2">Equipe 2</option>
          <option value="team3">Equipe 3</option>
          <option value="team4">Equipe 4</option>
        </select>
        <select name="clubs" id="">
          <option value="">Sélectionner un club</option>
          <option value="club1">Club 1</option>
          <option value="club2">Club 2</option>
          <option value="club3">Club 3</option>
          <option value="club4">Club 4</option>
        </select>
        <select name="arena" id="">
          <option value="">Sélectionner un gymnase</option>
          <option value="arena1">Gymnase 1</option>
          <option value="arena2">Gymnase 2</option>
          <option value="arena3">Gymnase 3</option>
          <option value="arena4">Gymnase 4</option>
        </select>
        <select name="types" id="">
          <option value="">Sélectionner un type de rencontre</option>
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

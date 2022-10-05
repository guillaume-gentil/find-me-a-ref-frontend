import { CornerUpLeft } from 'react-feather';

function UserForm() {
  return (
    <div className="user-form">
      <section className="user-form__top">
        <h3 className="user-form__title">
          Utilisateurs
        </h3>
        <button type="button" className="user-form__back"><CornerUpLeft /></button>
      </section>
      <form action="" className="user-form__form">
        <fieldset className="user-form__fieldset">
          <label htmlFor="lastname">
            Nom
            <input type="text" name="lastname" />
          </label>
          <label htmlFor="firstname">
            Prénom
            <input type="text" name="firstname" />
          </label>
          <label htmlFor="email">
            Email
            <input type="email" name="email" />
          </label>
          <label htmlFor="password">
            Mot de passe
            <input type="password" name="password" />
          </label>
          <label htmlFor="license_id">
            Numéro de licence
            <input type="number" name="license_id" />
          </label>
          <label htmlFor="level">
            Niveau
            <input type="text" name="level" />
          </label>
        </fieldset>
        <fieldset className="user-form__fieldset">
          <label htmlFor="address">
            Adresse Complète
            <input type="text" name="address" id="address" />
          </label>
          <label htmlFor="zipCode">
            Code Postal
            <input type="number" name="zipCode" id="zipCode" />
          </label>
          <button type="submit" className="user-form__submit">Valider</button>
        </fieldset>
      </form>
    </div>
  );
}

export default UserForm;

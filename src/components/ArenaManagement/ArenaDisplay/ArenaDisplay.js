// import :
import '../styles.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Edit, Trash } from 'react-feather';
import PropTypes from 'prop-types';
// import { deleteArena } from '../../../actions/arenas_management';

// component :
function ArenaDisplay({ arena }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.jwtToken);

  // function handleDelete(e) {
  //   const requestObject = {
  //     id: arena.id,
  //     token: token,
  //   };
  //   if (confirm('Etes-vous sûr de vouloir supprimer ce gymnase?')) {
  //     console.log(requestObject);
  //     dispatch(deleteArena(requestObject));
  //   }
  // }

  function handleClassChange(e) {
    const targetedArena = e.target.closest('.arena');
    const linkElem = targetedArena.querySelector('.arena__link');
    linkElem.classList.toggle('arena-hidden');
  }
  return (
    <section
      className="arena"
      onClick={handleClassChange}
    >
      <div className="arena__items">
        <section className="arena__name">
          <p className="arena__name--detail">{arena.name}</p>
        </section>
        <section className="arena__details">
          <p className="arena__details--item">{arena.address}</p>
        </section>
      </div>

      <section className="arena__link arena-hidden">
        <Link className="arenas-management__interaction" to={`/admin/arena/${arena.id}/edit`}><Edit size={25} /></Link>
        {/* <button type="button" className="arenas-management__interaction" onClick={handleDelete}><Trash size={25} /></button> */}

      </section>

    </section>
  );
}

// verify props :
ArenaDisplay.propTypes = {
  arena: PropTypes.object.isRequired,
};
// export :
export default ArenaDisplay;

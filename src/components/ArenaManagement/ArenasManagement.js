// import :
import './styles.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import component :
import ArenaDisplay from './ArenaDisplay/ArenaDisplay';
// fetchArenas is already coded in filters :
import { fetchArenas } from '../../actions/filters';
import { setAdminNav } from '../../actions/ui_actions';

// component :
function ArenasManagement() {
  // checking authorization :
  const token = useSelector((state) => state.jwtToken);
  // loading ou state content :
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArenas(token));
    dispatch(setAdminNav());
  }, []);
  const arenas = useSelector((state) => state.arenas);
  return (
    <>
      <section className="arenas">
        <h2 className="arenas__title">Arenas</h2>
        <Link className="arenas__interaction--create" to="/admin/arena/create">Créer un gymnase</Link>
        <div className="arena">
          <div className="arena__items">
            <section className="arena__name">
              <p className="arena__name--detail">Nom du Gymnase</p>
              <p className="arena__name--detail">Adresse</p>
            </section>
          </div>
        </div>
      </section>
      <section className="arenas">
        {arenas.map(
          (arena) => <ArenaDisplay key={arena.id} arena={arena} />,
        )}
      </section>
    </>
  );
}

// export :
export default ArenasManagement;

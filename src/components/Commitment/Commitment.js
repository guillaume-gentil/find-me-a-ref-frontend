// https://www.npmjs.com/package/google-map-react
// https://www.openstreetmap.org/
// Kernascléden : 48.006571 latt -3.320242 long
// https://api.gouv.fr/les-api/base-adresse-nationale
// https://developers.google.com/maps/documentation/javascript/get-api-key
// https://leafletjs.com/
// https://opencagedata.com/api
// https://github.com/tsamaya/react-leaflet-opencage/blob/master/README-create-react-app.md
// https://www.gisgraphy.com/documentation/user-guide.php#geocodingservice
// https://docs.mapbox.com/api/maps/static-images/
// https://react-leaflet.js.org/docs/start-installation/
// https://stackoverflow.com/questions/49441600/react-leaflet-marker-files-not-found

// import :
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { findGame } from 'src/selectors/findGame';

// component :
function Commitment() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const game = useSelector((state) => findGame(state.games, id));

  return (
    <div className="commitment__wrapper">
      <section className="commitment">
        <p className="commitment__date">{game.date}</p>
        <h1 className="commitment__teams">{game.teams[0].name} <span className="vs">VS</span> {game.teams[1].name}</h1>
        <p className="commitment__address">{game.arena.address}, {game.arena.zipCode}</p>
        <div className="commitment__game-specs">
          <p className="commitment__category">{game.teams[0].category.name}</p>
          <p className="commitment__type">{game.type.name}</p>
        </div>
        <p className="commitment__contact">Contact du match : <strong>Jean LeChef : 06 01 02 03 04</strong></p>
        <div className="commitment__ref-section">
          <div>
            <p className="commitment__counter">ARBITRES INSCRITS SUR CETTE RENCONTRE : {game.users.length}/2</p>
            { game.users.length > 0
                && game.users.map((user) => <p className="commitment__ref" key={user.id}>{`${user.firstname} ${user.lastname}`}</p>)}
          </div>
          { game.users.length < 2 && <button type="button" className="commitment__button">J'arbitre !</button>}
        </div>
      </section>
      <section className="map__container">
        {/* For documentation : first parameter is latitude and second parameter is longitude */}
        <MapContainer id="map" center={[48.006571, -3.320242]} zoom={15} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]} />
        </MapContainer>
      </section>
    </div>
  );
}
// export :
export default Commitment;

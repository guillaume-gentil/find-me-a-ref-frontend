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
import Moment from 'moment';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Marker } from 'react-leaflet/Marker';
import 'leaflet/dist/leaflet.css';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import L from 'leaflet';

import { findGame } from 'src/selectors/findGame';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { findUserMail } from '../../selectors/findUserMail';
import { addRefToGame } from '../../actions/commitment';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

// component :
function Commitment() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const game = useSelector((state) => findGame(state.games, id));
  const token = useSelector((state) => state.jwtToken);

  // change date time format :
  const formatDate = Moment(game.date).format('DD-MM-YYYY à HH:MM');

  function checkCommited() {
    const userMail = findUserMail(token);

    const gameUsers = game.users;

    const result = gameUsers.find((user) => user.email === userMail);

    return result;
  }

  function handleCommitButton() {
    const gameId = game.id;
    const userMail = findUserMail(token);
    dispatch(addRefToGame({ userMail, gameId, token }));
  }

  return (
    <div className="commitment__wrapper">
      <section className="commitment">
        <p className="commitment__date">{formatDate}</p>
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
                && game.users.map((user) => <p className="commitment__ref" key={user.id}>{`${user.firstname}`}</p>)}
          </div>
          { (game.users.length < 2 || checkCommited()) && <button type="button" className="commitment__button" onClick={handleCommitButton}>{checkCommited() ? 'Se désengager' : 'J\'arbitre !'}</button>}
        </div>
      </section>
      <section className="map__container">
        {/* For documentation : first parameter is latitude and second parameter is longitude */}
        <MapContainer id="map" center={[game.arena.latitude, game.arena.longitude]} zoom={15} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[game.arena.latitude, game.arena.longitude]} />
        </MapContainer>
      </section>
    </div>
  );
}
// export :
export default Commitment;

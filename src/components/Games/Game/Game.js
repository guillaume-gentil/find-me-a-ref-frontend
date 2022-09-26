// import :
import '../styles.scss';
import registering from 'src/assets/img/registering.png';

// component :
function Game() {
  const gameState = 2;

  const gamecolorOne = 'game__noregistered';
  const gameColorTwo = 'game__oneregistered';
  const gameColorThree = 'game__fullregistered';

  let gameColor = gamecolorOne;

  if (gameState === 0) {
    gameColor = gamecolorOne;
  }
  else if (gameState === 1) {
    gameColor = gameColorTwo;
  }
  else {
    gameColor = gameColorThree;
  }
  return (
    <section className="game">
      <h2 className="game__item">Equipe 1 VS Equipe 2</h2>
      <p className="game__item">01/08/1998</p>
      <p className="game__item">Gymnase du coin de la rue</p>
      <p className="game__item">categorie : U12</p>
      <p className={gameColor}>{gameState}/2</p>
      <img className="game__registering" src={registering} alt="registering button" />
    </section>
  );
}

// export :
export default Game;

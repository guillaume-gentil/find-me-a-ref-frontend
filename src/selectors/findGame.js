/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} games - game list
 * @param {string} searchedId - searched game's id
 * @return {Object} - found game
 */
export function findGame(games, searchedId) {
  const game = games.find((testedGame) => {
    return testedGame.id === parseInt(searchedId, 10);
  });
  return game;
}

/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} users - user list
 * @param {string} searchedId - searched user's id
 * @return {Object} - found user
 */
export function removeUser(userList, searchedId) {
  const newUsers = userList.filter((user) => user.id !== parseInt(searchedId, 10));
  return newUsers;
}

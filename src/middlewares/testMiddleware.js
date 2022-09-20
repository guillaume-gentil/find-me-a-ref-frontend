const testMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    default:
  }
  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};
export default testMiddleware;

export default (state, { type, payload }) => {
  switch (type) {
    case 'SET_USER':
      return {
        ...state,
        user: payload,
      };
    case 'SET_LOGIN':
      return {
        ...state,
        login: payload,
      };
    default:
      return state;
  }
};

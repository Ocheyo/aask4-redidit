export default (state = null, action) => {
  switch (action.type) {
    case 'TEST':
      return action.payload;
      break;
  }
  return state;
};

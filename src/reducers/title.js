const title = (state = 'Reduxの勉強', action) => {
  switch(action.type) {
    case 'CHANGE_TITLE':
      return action.payload.title;
    case 'WAIT':
      return 'wait';
    default:
      return state;
  }
}

export default title;
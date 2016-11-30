const messages = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_MESSAGES':
      return action.messages
    default:
      return state
  }
}

export default messages;

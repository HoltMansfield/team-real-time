const initialState = {
  showSpinner: false,
  showOverlay: false
}

const uiSettings = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SHOW_SPINNER':
      return {
        showSpinner: action.newState,
        showOverlay: state.showOverlay
      }
    case 'SET_SHOW_OVERLAY':
      return {
        showSpinner: state.showSpinner,
        showOverlay: action.newState
      }
    default:
      return state;
  }
}

export default uiSettings

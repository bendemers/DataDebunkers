// CONSTANTS
const SHOW_LAYER = 'SHOW_LAYER'
const HIDE_LAYER = 'HIDE_LAYER'

//ACTION CREATORS
export const hideLayer = (layer) => ({
  type: HIDE_LAYER,
  data: layer
})

export const showLayer = (layer) => ({
  type: SHOW_LAYER,
  data: layer
})

//REDUCER
const initialState = {
  police: true,
  schools: true
}
export default (state = initialState, action) => {
  const newState = Object.assign({}, state)
	switch(action.type) {
	 	case HIDE_LAYER:
     newState[action.data] = false;
      return newState
    case SHOW_LAYER:
    newState[action.data] = true;
      return newState
    default: 
      return state;
  }
}
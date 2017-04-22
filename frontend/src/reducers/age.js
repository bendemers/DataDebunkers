// CONSTANTS
const ADD_GROUP = 'ADD_GROUP';
const REMOVE_GROUP = 'REMOVE_GROUP'
const ADD_ALL = 'ADD_ALL';
const CLEAR_ALL = 'CLEAR_ALL';

//ACTION CREATORS
export const addGroup = (group) => ({
  type: ADD_GROUP,
  data: group
})

export const removeGroup = (group) => ({
  type: REMOVE_GROUP,
  data: group
})

export const addAll = () => ({
  type: ADD_ALL
})

export const clearAll = () => ({
  type: CLEAR_ALL,
})

//REDUCER
const initialState = {
  uncategorized: true,
  'under 18': true,
  '18-25': true,
  '26-40': true,
  '41-64': true,
  '65+': true,
}

const negativeState = {
  uncategorized: false,
  'under 18': false,
  '18-25': false,
  '26-40': false,
  '41-64': false,
  '65+': false,
}

export default (state = initialState, action) => {
  const newState = Object.assign({}, state)
	switch(action.type) {
	 	case ADD_GROUP:
      newState[action.data] = true;
      return newState;
    case REMOVE_GROUP:
      newState[action.data] = false;
      return newState;
    case ADD_ALL:
      return initialState;
    case CLEAR_ALL:
      return negativeState;
    default: 
      return state;
  }
}
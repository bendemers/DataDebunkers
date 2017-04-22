// CONSTANTS
const ADD_SET = 'ADD_SET';
const REMOVE_SET = 'REMOVE_SET'
const ADD_ALL = 'ADD_ALL';
const CLEAR_ALL = 'CLEAR_ALL';

//ACTION CREATORS
export const addSet = (num) => ({
  type: ADD_SET,
  data: num
})

export const removeSet = (num) => ({
  type: REMOVE_SET,
  data: num
})

export const addAll = () => ({
  type: ADD_ALL
})

export const clearAll = () => ({
  type: CLEAR_ALL,
})

//REDUCER
const initialState = [true, true, true, true, true, true, true]

const negativeState = [false, false, false, false, false, false, false]

export default (state = initialState, action) => {
  const newArr = state.slice();
	switch(action.type) {
	 	case ADD_SET:
      newArr[action.data] = true
      return newArr;
    case REMOVE_SET:
      newArr[action.data] = false
      return newArr;
    case ADD_ALL:
      return initialState;
    case CLEAR_ALL:
      return negativeState;
    default: 
      return state;
  }
}
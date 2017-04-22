// CONSTANTS
const SET_START = 'SET_START';
const SET_END = 'SET_END';

//ACTION CREATORS
export const setStart = (num) => ({
  type: SET_START,
  data: num
})

export const setEnd = (num) => ({
  type: SET_END,
  data: num
})

//REDUCER
const initialState = {
  start: 0,
  end: 59,
}

export default (state = initialState, action) => {
	switch(action.type) {
	 	case SET_START:
      return Object.assign({}, state, {start: action.data});
    case SET_END:
      return Object.assign({}, state, {end: action.data});
    default: 
      return state;
  }
}

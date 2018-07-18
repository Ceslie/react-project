import {combineReducers} from 'redux';

function xxx(state = 0, action) {
  switch (action.type) {
    default:
      return state
  }

}

function yyy(state = {}, action) {
  switch (action.type){

    default:
      return state
  }
}

export default combineReducers({
  xxx,
  yyy
})
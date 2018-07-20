import {combineReducers} from 'redux';

import {
  AUTH_SUCCESS,
  ERROR_MSG
} from './action-types'

//产生user状态的reducer
const initUser = {
  username: '',
  type: '',
  msg: '',
  redirectTo: ''
};
function user(state = initUser, action) {
  switch (action.type){
    case AUTH_SUCCESS:
      const user = action.data;
      return {...user, redirectTo: getRedictTo(user.type, user.header)};
    case ERROR_MSG:
      const msg = action.data;
      return {...state, msg};
    default :
      return state
  }
}

//合并多个reducer, 生成一个新的reducer
//返回的状态, 是包含所有状态的对象: {user: xxx}
export default combineReducers({
  user
})


function getRedictTo(type, header) {
  let path = '';
  if (type === 'dashen'){
    path = '/dashen';
  }else {
    path ='/laoban'
  }
  if(!header) {
    path += 'info'
  }
  return path;
}

/*
1. 考虑信息是否完善, 根据header是否存在, 然后跳转去不同的页面
2. 用户类型  根据type确定

/dashen
/laoban
/dasheninfo
/laobaninfo
*/
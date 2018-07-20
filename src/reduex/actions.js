/*
  包含所有action creator函数的模块
  同步action: 对象
  异步action:
 */

import {
  AUTH_SUCCESS,
  ERROR_MSG
} from './action-types';
import {
  reqRegister,
  reqLogin
} from "../api";


//同步错误消息
const errMsg = msg => ({type:ERROR_MSG,data: msg});
//同步成功消息
const authSuccess = user => ({type:AUTH_SUCCESS, data: user});

/*
  异步注册
 */
export function register({username, password, password2, type}) {
  //进行前台表单验证, 如果不合法返回一个同步action对象, 显示提示信息
  if (!username || !password || !type){
    return errMsg('用户名密码必须输入')
  }
  if (password !== password2){
    return errMsg('密码和确认密码不同')
  }
  return async dispatch => {
    //异步ajax请求, 得到响应
    const response = await reqRegister({username, password, type});
    //得到响应体数据
    const result = response.data;
    //如果是正确的
    if (result.code === 0) {
      dispatch(authSuccess(result.data))
    }else{
      //分发提示错误的action
      dispatch(errMsg(result.msg))
    }
  }
}
/*
  异步登录
 */
export const login = (user) => {
  const {username, password} = user;
  return async dispatch => {
    //进行前台表单验证, 如果不通过, 分发失败的同步action对象
    if(!username){
      dispatch(errMsg('必须指定用户名'));
      return
    }else if(!password) {
      dispatch(errMsg('必须指定密码'))
      return
    }
    const response = await reqLogin(username, password)
    const result = response.data;
    if (result.code === 0){
      dispatch(authSuccess(result.data))
    }else {
      dispatch(errMsg(result.msg))
    }
  }
};


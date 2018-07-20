import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import {Provider} from 'react-redux';

import Login from './containers/login/login';
import Register from './containers/register/register';
import Main from './containers/main/main';
import store from './reduex/store'

import './assets/css/index.less'

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route component={Main}/> {/*默认路由: 只要不与上面的匹配, 就显示当前组件*/}
      </Switch>
    </BrowserRouter>
  </Provider>
), document.getElementById("app"));

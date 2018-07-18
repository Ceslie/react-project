import React,{Component} from 'react';
import {NavBar,List,WhiteSpace,WingBlank,InputItem,Button,Radio} from 'antd-mobile'

import Logo from '../../components/logo/logo'

class Login extends Component {

  //定义初始状态
  state = {
    username: '',
    password: ''
  };

  handleChange = (name,val) => {
    this.setState({
      [name]: val
    })
  }
  login = () => {
    console.log(this.state)
  }

  goRegister = () => {
    //跳转到登陆的路由
    this.props.history.replace('/register')
  }

  render (){
    return(
      <div>
        <NavBar>用户登录</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <WhiteSpace/>
            <InputItem placeholder='请输入用户名' onChange={val=> this.handleChange('username', val)}>用户名:</InputItem>
            <WhiteSpace/>
            <InputItem type='password' placeholder='请输入密码' onChange={val=> this.handleChange('password', val)}>密码:</InputItem>
            <WhiteSpace/>
            <Button type='primary' onClick={this.login}>登&nbsp;&nbsp;陆</Button>
            <WhiteSpace/>
            <Button onClick={this.goRegister}>还没有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Login;
import React,{Component} from 'react';
import {NavBar,List,WhiteSpace,WingBlank,InputItem,Button,Radio} from 'antd-mobile'

import Logo from '../../components/logo/logo'

class Register extends Component {

  state= {
    username: '',
    password: '',
    password2: '',
    type: 'dashen'   //laoban
  };

  handleChange = (name, val) => {
    this.setState({
      [name]: val  //属性名是name的值, 而是name本身
    })
  };
  register = () => {
    console.log(this.state);
  };
  goLogin = () => {
    //跳转到登录路由
    this.props.history.replace('/login')
  };

  render (){
    const {type} = this.state;
    return(
      <div>
        <NavBar>用户注册</NavBar>
        <Logo />
        <WingBlank>
          <List>
            <WhiteSpace/>
            <InputItem placeholder='请输入用户名' onChange={val => this.handleChange('username',val)}>用户名:</InputItem>
            <WhiteSpace/>
            <InputItem type='password' placeholder='请输入密码' onChange={val => this.handleChange('password',val)}>密&nbsp;&nbsp;码:</InputItem>
            <WhiteSpace/>
            <InputItem type='password' placeholder='请输入确认密码' onChange={val => this.handleChange('password2',val)}>确认密码:</InputItem>
            <WhiteSpace/>
            <List.Item>
              <span>用户类型: </span>&nbsp;&nbsp;
              <Radio checked={type==='dashen'} onChange={() => this.handleChange('type','dashen')}>大神</Radio>&nbsp;&nbsp;&nbsp;
              <Radio checked={type==='laoban'} onChange={() => this.handleChange('type','laoban')}>老板</Radio>
            </List.Item>
            <WhiteSpace/>
            <Button type='primary' onClick={this.register}>注&nbsp;&nbsp;册</Button>
            <WhiteSpace/>
            <Button onClick={this.goLogin}>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Register;
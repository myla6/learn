import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreators } from './store';
import {
	LoginWrapper,
	LoginBox,
	Title,
	InputBox,
	Input,
	Button
} from './style'

class Login extends PureComponent{
	render(){
		const { login, isLogin} =this.props;
		{
			if(!isLogin){
				return(
					<LoginWrapper>
						<LoginBox>
							<Title>
								<span className='login'>登陆</span>
								<b>·</b>
								<span className='reg'>注册</span>
							</Title>
							<InputBox>
								<Input placeholder='手机号或邮箱' innerRef={(input) => {this.account=input}}/>
								<Input className='password' placeholder='密码' type='password' innerRef={(input) => {this.password=input}}/>
								<Button onClick={() => login(this.account,this.password)}>登陆</Button>
							</InputBox>
						</LoginBox>
					</LoginWrapper>
				)
			}else{
				return <Redirect to='/' />
			}
		}
	}

}

const mapState=(state) =>({
	isLogin:state.getIn(['login','isLogin'])
})

const mapDispath=(dispatch) => ({
	login(accountElem,passwordElem){
		dispatch(actionCreators.login(accountElem.value,passwordElem.value));
	}
	
})

export default connect(mapState,mapDispath)(Login)
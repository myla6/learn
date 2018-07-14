import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
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
		return(
			<LoginWrapper>
				<LoginBox>
					<Title>
						<span className='login'>登陆</span>
						<b>·</b>
						<span className='reg'>注册</span>
					</Title>
					<InputBox>
						<Input placeholder='手机号或邮箱'/>
						<Input className='password' placeholder='密码'/>
						<Button>登陆</Button>
					</InputBox>
				</LoginBox>
			</LoginWrapper>
		)
	}

}

const mapState=(state) =>({
	
})

const mapDispath=(dispatch) => ({
	
	
})

export default connect(mapState,mapDispath)(Login)
import axios from 'axios'
import * as constants from './constants'

const changeLogin=(result) => ({
	type:constants.CHANGE_LOGIN,
	isLogin:result
})

export const logOut=() => ({
	type:constants.CHANGE_LOGOUT,
	isLogin:false
})

export const login= (account,password) =>{
	return (dispatch) => {
		axios.get('api/login.json?account='+ account +'&password='+ password).then((res) => {
			const result=res.data.data;
			console.log(res);
			if(result){
				dispatch(changeLogin(result))
			}else{
				alert('登陆失败')
			}
		})
	}
}
import axios from 'axios';
import * as constants from './constants'

const DetailInfo=(title,content) => ({
	type:constants.Get_DETAIL_INFO,
	title,
	content
})

export const getDetail=(id) =>{
	return (dispatch) => {
		axios.get('/api/detail.json?id='+ id).then((res) => {
			const data=res.data.data;
			dispatch(DetailInfo(data.title,data.content))
		})
	}
}

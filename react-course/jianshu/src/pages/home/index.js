import React,{ Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {
	HomeWrapper,
	HomeLeft,
	HomeRight
} from './style.js'

class Home extends Component{
	render(){
		return(
			<HomeWrapper>
				<HomeLeft>
					<img 
						className='banner-img' 
						src='//upload.jianshu.io/admin_banners/web_images/4338/8e2a58455e68291fd10f2a926ed793a016a66e2e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
						alt=''
						/>
					<Topic></Topic>
					<List></List>
				</HomeLeft>
				<HomeRight>
					<Recommend></Recommend>
					<Writer></Writer>
				</HomeRight>
			</HomeWrapper>
		)
	}
}

export default Home;
import React, { PureComponent } from 'react';
import Topic from './components/Topic';
import { connect } from 'react-redux';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreaters } from './store'
import {
	HomeWrapper,
	HomeLeft,
	HomeRight,
	BackTop
} from './style.js'

class Home extends PureComponent {
	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img 
						className='banner-img' 
						src='//upload.jianshu.io/admin_banners/web_images/4348/7c6c4340ce1eb2aa20bba2c5542a2113d33f63c5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
						alt=''
						/>
					<Topic></Topic>
					<List></List>
				</HomeLeft>
				<HomeRight>
					<Recommend></Recommend>
					<Writer></Writer>
				</HomeRight>
				{this.props.show?<BackTop onClick={this.handleScrollTop}>顶部</BackTop>:null}
			</HomeWrapper>
		)
	}

	handleScrollTop() {
		window.scrollTo(0, 0);
	}

	componentDidMount() {
		this.props.changeHomeData();
		window.addEventListener('scroll', this.props.scrollTopShow);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.scrollTopShow);
	}
}

const mapState = (state) => ({
	show: state.getIn(['home', 'showScroll'])
})

const mapDispath = (dispatch) => ({
	changeHomeData() {
		dispatch(actionCreaters.getHomeInfo());
	},
	scrollTopShow() {
		if (document.documentElement.scrollTop > 150) {
			dispatch(actionCreaters.ToggleTop(true))
		} else {
			dispatch(actionCreaters.ToggleTop(false))
		}
	}
});

export default connect(mapState, mapDispath)(Home);
import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { BannerWrapper} from '../style';

class Banner extends PureComponent{
	render(){
		return(
			<BannerWrapper>
				<img 
					className='banner-img' 
					src='//upload.jianshu.io/admin_banners/web_images/4342/ad6f90788db4c2a2b0fe87e3b654d1330698dc89.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
					alt=''
					/>
			</BannerWrapper>
		)
	}
}

const mapState=(state) => ({
	
});

export default connect(mapState,null)(Banner);
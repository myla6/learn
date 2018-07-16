import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { BannerWrapper} from '../style';
import '../style.css'

class Banner extends PureComponent{
	render(){
		const { list } =this.props;
		const settings = {
      dots: true,
      infinite: true,
      autoplay:true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
		return(
			<BannerWrapper>
				 <Slider {...settings}>
              {
              	list.map((item) => (
              		<div className="banner-img" key={item.get('id')}>
              			<img src={item.get('imgUrl')} alt=''/>
              		</div>
              	))
              }
          </Slider>
			</BannerWrapper>
		)
	}
}

const mapState=(state) => ({
	list:state.getIn(['home','bannerList'])
});


export default connect(mapState,null)(Banner);
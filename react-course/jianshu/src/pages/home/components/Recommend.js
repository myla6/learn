import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { 
	RecommendWrapper,
	RecommendItem,
	DownloadWrapper,
	DownloadInfo
} from '../style'


class Recommend extends PureComponent{
	render(){
		return(
			<div>
				<RecommendWrapper>
					{
						this.props.list.map((item) => {
							return (
								<RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}>
								</RecommendItem>
							)
						})
					}
				</RecommendWrapper>
				<DownloadWrapper>
					<div className='loadImg'></div>
					<DownloadInfo>
						<h4>下载简书手机App<i className='iconfont download'>&#xe632;</i></h4>
						<p>随时随地发现和创作内容</p>
					</DownloadInfo>
				</DownloadWrapper>
			</div>
		)
	}
}

const mapState=(state) => ({
	list:state.getIn(['home','recommendList'])
})

export default connect(mapState,null)(Recommend);
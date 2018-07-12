import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { 
	RecommendWrapper,
	RecommendItem,
	DownloadWrapper,
	DownloadInfo
} from '../style'

class Recommend extends Component{
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
					<img src='http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png' alt='' />
					<DownloadInfo>
						<h4>下载简书手机App</h4>
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
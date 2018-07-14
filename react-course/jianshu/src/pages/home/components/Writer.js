import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper,WriterTitle,WriterList,WriterSwitch,WriterInfo,FllowInFo } from '../style'

class Writer extends PureComponent{
	render(){
		const { list }=this.props;
		return(
			<WriterWrapper>
				<WriterTitle>
					推荐作者
					<WriterSwitch>
						<i className='iconfont spin'>&#xe851;</i>
						换一批
					</WriterSwitch>
				</WriterTitle>
				{
					list.map((item) => {
						return(
							<WriterList key={item.get('id')}>
								<img className='userImg' src={item.get('userImg')} />
								<WriterInfo>
									<h4 className='title'>{item.get('title')}</h4>
									<p className='desc'>{item.get('desc')}</p>
								</WriterInfo>
								<FllowInFo>
								<i className='iconfont fllow'>&#xe61a;</i>
									关注
								</FllowInFo>
							</WriterList>
						)
					})
				}
			</WriterWrapper>
		)
	}
}

const mapState=(state) => ({
	list:state.getIn(['home','writeList'])
})

export default connect(mapState,null)(Writer);
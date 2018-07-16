import styled from 'styled-components';
import LoadPic from '../../statics/download.png'

export const HomeWrapper=styled.div`
	overflow:hidden;
	width:960px;
	margin:0 auto;
`;

export const HomeLeft=styled.div`
	float:left;
	margin-left:15px;
	padding-top:30px;
	width:625px;
`;

export const HomeRight=styled.div`
	width:280px;
	float:right;
`;

export const BannerWrapper=styled.div`
	width:625px;
	height:270px;
	padding-bottom:30px;
	.banner-img{
		img{
			display:block;
			width:100%; 
			height:100%;
		}
	}
`;

export const TopicWrapper=styled.div`
	overflow:hidden;
	padding:20px 0 10px 0;
	margin-left:-18px;
	border-bottom:1px solid #f0f0f0;
`;

export const TopicItem=styled.div`
	float:left;
	hieght:32px;
	line-height:32px;
	padding-right:10px;
	margin-left:18px;
	margin-bottom:18px;
	background:#f7f7f7;
	font-size:14px;
	color:#000;
	border:1px solid #dcdcdc;
	border-radius:4px;
	.topic-pic{
		display:block; 
		float:left;
		width:32px;
		height:32px;
		margin-right:10px;
	}	
`;

export const ListItem=styled.div`
	overflow:hidden;
	padding:20px 0;
	border-bottom:1px solid #f0f0f0;
	.pic{
		display:block;
		width:125px;
		height:100px;
		float:right;
		border-radius:3px;
	}
`;

export const ListInfo=styled.div`
	width:500px;
	float:left;
	.title{
		font-size:18px; 
		line-height:24px;
		margin-bottom:8px;
		font-weight:bold;
		color:#333;
	}
	.desc{
		font-size:13px;
		line-height:24px;
		color:#999;
	}
`;

export const RecommendWrapper=styled.div`
	margin:30px 0;
	width:280px;
`;

export const RecommendItem=styled.a`
	display:block;
	width:280px; 
	height:50px;
	background:url(${(props) => props.imgUrl});
	background-size:contain;
	margin-bottom:6px;
`;

export const DownloadWrapper=styled.div`
	margin-bottom: 30px;
    padding: 10px 22px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    .loadImg {
    	display:inline-block;
    	vertical-align:middle;
    	width: 60px;
	    height: 60px;
	    opacity: .85;
	    background:url(${LoadPic});
	    background-size:contain;
    }
`;

export const DownloadInfo=styled.div`
	display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    h4{
    	font-size: 15px;
    	color: #333;
    	.download{
    		font-size:13px;
    		margin-left:7px;
    	}
    }
    p{
    	margin-top: 4px;
	    font-size: 13px;
	    color: #999;
    }
`;

export const WriterWrapper=styled.div`
	
`;

export const WriterTitle=styled.div`
	overflow:hidden;
	font-size:14px; 
	color:#969696;
`;

export const WriterSwitch=styled.div`
	float:right;
	font-size:14px;
	color:#787878;
	cursor:pointer;
	.spin{
		font-size:12px;
	}
`;

export const WriterList=styled.div`
	overflow:hidden;
	line-height:20px;
	margin-top:15px;
	.userImg{
		float: left;
	    width: 48px;
	    height: 48px;
	    margin-right: 10px;
	    border-radius:50%;
	    border:1px solid #ddd;
	}
`;

export const WriterInfo=styled.div`
	float:left;
	.title{
		padding-top: 5px;
	    margin-right: 60px;
	    font-size: 14px;
	}
	.desc{
		margin-top: 2px;
	    font-size: 12px;
	    color: #969696;
	}
`;

export const FllowInFo=styled.div`
	float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
    .fllow{
    	font-size:14px;
    	font-weight:bold;
    }
`;

export const LoadMore=styled.div`
 	display: block;
    margin: 30px auto 60px;
    padding: 10px 15px;
    text-align: center;
    font-size: 15px;
    border-radius: 20px;
    color: #fff;
    background-color: #a5a5a5;
    cursor:pointer;
`;

export const BackTop=styled.div`
	position:fixed;
	bottom:40px;
	right:40px;
	cursor: pointer;
    width: 50px;
    height: 50px;
    line-height:50px;
    text-align: center;
    display: block;
    border:1px solid #dcdcdc;
`;


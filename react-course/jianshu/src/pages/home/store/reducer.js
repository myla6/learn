import { fromJS } from 'immutable';

const defaultState=fromJS({
	topicList:[{
			id:1,
			title:'读书',
			imgUrl:'//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
		},{
			id:2,
			title:'摄影',
			imgUrl:'//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
		}],
	articleList:[{
			id:1,
			title:'我可不想，女朋友为了喝一杯星巴克还要心疼半天',
			desc:'曾有人问过这样一个问题：你这么努力工作，是为什么？我说，是为了不想过没钱的生活。 你会觉得很俗么？ 前两天，出差的时候遇到了高我一届的学长，一起...',
			imgUrl:'//upload-images.jianshu.io/upload_images/6180838-ba86fc57a6ef6213.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
		},{
			id:2,
			title:'我可不想，女朋友为了喝一杯星巴克还要心疼半天',
			desc:'曾有人问过这样一个问题：你这么努力工作，是为什么？我说，是为了不想过没钱的生活。 你会觉得很俗么？ 前两天，出差的时候遇到了高我一届的学长，一起...',
			imgUrl:'//upload-images.jianshu.io/upload_images/6180838-ba86fc57a6ef6213.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
		}],
	recommendList:[{
			id:1,
			imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
		},{
			id:2,
			imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
		},{
			id:3,
			imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
		},{
			id:4,
			imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
		},{
			id:5,
			imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
		}]
});

export default(state=defaultState,action) =>{
	switch(action.type){
		default:
			return state;
	}
}
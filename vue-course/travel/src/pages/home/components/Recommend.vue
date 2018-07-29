<template>
	<div class="wrapper">
		<div class="title">
			<img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢">
			<span class="mp-title">猜你喜欢</span>
		</div>
		<ul>
			<li class="item-box border-bottom" v-for="item of list" :key="item.id">
				<img class="item-img" :src="item.imgUrl" />
		        <div class="item-info">
		          <p class="item-title">{{item.title}}</p>
		          <p class="item-desc">{{item.desc}}</p>
		          <button class="item-button">查看详情</button>
		        </div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'HomeRecommend',
		data (){
			return {
				list:[{
					id:'1',
					imgUrl:'http://img1.qunarzz.com/sight/p0/1807/4f/4fd71bb53adda1d4a3.img.jpg_200x200_87dc042f.jpg',
					title:'七彩云南欢乐世界',
					desc:'七彩云南欢乐世界七彩云南欢乐世界七彩云南欢乐世界'
				},{
					id:'2',
					imgUrl:'http://img1.qunarzz.com/sight/p0/1807/4f/4fd71bb53adda1d4a3.img.jpg_200x200_87dc042f.jpg',
					title:'111七彩云南欢乐世界',
					desc:'111七彩云南欢乐世界七彩云南欢乐世界七彩云南欢乐世界'
				}]
			}
		}
	}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.wrapper
	margin-top:.2rem
	background:#fff
	.title
		position:relative
		padding:.24rem 0 .26rem
		.title-img
			display:inline-block
			overflow:hidden
			height:.3rem
			width:.3rem
			margin-left:.2rem
			vertical-align:top
		.mp-title
			display:inline-block
			margin-left:.08rem
			height:.44rem
			color:#212121
			font-size:.32rem
			line-height:.44rem
	.item-box
		overflow:hidden
		display:flex
		height:1.9rem
		padding: .2rem 0
		margin-left:.24rem
		.item-img
			width:1.7rem
			height:1.7rem
			paddinh:.1rem
		.item-info
			flex:1
			padding:.1rem
			min-width:0
			.item-title
				line-height:.54rem
				font-size:.32rem
				ellipsis()
			.item-desc
				line-height:.4rem
				color:#ccc
				ellipsis()
			.item-button
				line-height:.44rem
				margin-top:.16rem
				background:#ff9300
				padding:0 .2rem
				border-radius:.06rem
				color:#fff
</style>
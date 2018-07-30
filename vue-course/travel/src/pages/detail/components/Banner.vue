<template>
	<div>
		<div class="banner" @click="handleClick">
			<img class="banner-img" src="//img1.qunarzz.com/sight/p32/201211/00/e0d3c3c83bc02d8193835fbb.jpg_600x330_8be0e1fc.jpg"/>
			<div class="banner-info">
				<p class="banner-desc">里神山圣湖旅游区</p>
				<p class="banner-num"><span class="iconfont pic-icon">&#xe632;</span>3</p>
			</div>
		</div>
		<common-gallary :list="list" v-show="showGallary" @change="handleCloseClick"></common-gallary>
	</div>
</template>
<script>
	import commonGallary from '@/common/gallary/Gallary'
	export default{
		name:'detailBanner',
		data(){
			return {
				showGallary:false,
				list:['http://img1.qunarzz.com/sight/p0/201405/04/daf0fa5bbac61d3bb2045fe1a0251405.jpg_r_800x800_fb127412.jpg','http://img1.qunarzz.com/sight/p0/1408/19/c573b5eb5b182fa51318ad1daff88129.jpg_r_800x800_879b985c.jpg']
			}
		},
		components:{
			commonGallary
		},
		methods:{
			handleClick(){
				this.showGallary=true
			},
			handleCloseClick(){
				this.showGallary=false
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.banner
		position:relative
		width:100%
		height:0
		padding-bottom:55%
		.banner-img
			width:100%
		.banner-info
			color:#fff
			.banner-desc
				position:absolute
				bottom:0
				left:0
				line-height:.6rem
				height:.6rem
				font-size:.32rem
				padding:0 .2rem
				text-shadow:0 1px 2px rgba(0,0,0,0.70)
			.banner-num
				position:absolute
				left:.2rem
				bottom:.56rem
				width:1.2rem
				height:.4rem
				line-height:.4rem
				font-size:.24rem
				text-align:center
				border-radius:.2rem
				background:rgba(0,0,0,.4)
				.pic-icon
					font-size:.2rem	
</style>
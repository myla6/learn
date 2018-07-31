<template>
	<div>
		<div class="banner" @click="handleClick">
			<img class="banner-img" :src="bannerImg"/>
			<div class="banner-info">
				<p class="banner-desc">{{sightName}}</p>
				<p class="banner-num"><span class="iconfont pic-icon">&#xe632;</span>{{gallaryImgs.length}}</p>
			</div>
		</div>
		<fade-animation>
			<common-gallary :list="gallaryImgs" v-show="showGallary" @change="handleCloseClick"></common-gallary>
		</fade-animation>
	</div>
</template>
<script>
	import commonGallary from '@/common/gallary/Gallary'
	import fadeAnimation from '@/common/fadeAnimation/fadeAnimation'
	export default{
		name:'detailBanner',
		props:{
			sightName:String,
			bannerImg:String,
			gallaryImgs:Array
		},
		data(){
			return {
				showGallary:false
			}
		},
		components:{
			commonGallary,
			fadeAnimation
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
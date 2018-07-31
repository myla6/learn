<template>
	<div>
		<router-link 
			tag="div" 
			to='/' 
			class="header-normal" 
			v-show="showNormal"
		>
			<div class="iconfont back-icon">&#xe624;</div>
		</router-link>
		<div class="header-fixed" v-show="!showNormal" :style="opacityStyle">
			<router-link to='/'>
				<div class="iconfont back-fixed-icon">&#xe624;</div>
			</router-link>
			{{sightName}}
		</div>
	</div>
</template>
<script>
	export default{
		name:'detailHeader',
		props:{
			sightName:String
		},
		data(){
			return{
				showNormal:true,
				opacityStyle:{
					opacity:0
				}
			}
		},
		methods:{
			handleScroll(){
				const top=document.documentElement.scrollTop
				if(top>60){
					let opacity=top/140
					opacity=opacity>1?1:opacity
					this.opacityStyle={opacity}
					this.showNormal=false
				}else{
					this.showNormal=true
				}
			}
		},
		mounted(){
			window.addEventListener('scroll',this.handleScroll)
		},
		beforeDestroy(){
			window.removeEventListener('scroll',this.handleScroll)
		}
	}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
	.header-normal
		position:absolute
		width:.72rem
		height:.72rem
		line-height:.72rem
		top:.2rem
		left:.2rem
		color:#fff
		text-align:center
		border-radius:50%
		background:rgba(0,0,0,.5)
		.back-icon
			color:#fff
			font-weight:bold
			font-size:.32rem
	.header-fixed
		z-index:99
		position:fixed
		top:0
		left:0
		width:100%
		height:.86rem
		line-height:.86rem
		background:$bgColor
		text-align:center
		color:#fff
		.back-fixed-icon
			position:absolute
			left:0
			top:0
			width:.64rem
			font-size:.4rem
			color:#fff
</style>
<template>
	<div class="header">
		<router-link to="/">
			<div class="header-left"><div class="iconfont">&#xe624;</div></div>
		</router-link>
		<div class="header-input"> <span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
		<router-link to="/city">
			<div class="header-right">{{this.city}}<span class="iconfont arrow-bottom">&#xe64a;</span></div>
		</router-link>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default{
		name:'HomeHeader',
		computed:{
			...mapState(['city'])
		}
	}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
	.header
		display:flex
		line-height:.86rem
		background:$bgColor
		color:#fff
		.header-left
			width:.64rem
			float:left
			text-align:center
			font-size:.4rem
			color:#fff
		.header-input
			flex:1
			height:.64rem
			line-height:.64rem
			margin-top:.12rem
			margin-left:.24rem
			padding-left:.2rem
			background:#fff
			border-radius:.1rem
			color:#ccc
		.header-right
			min-width:1.04rem
			padding:0 .1rem
			float:right
			text-align:center
			color:#fff
			.arrow-bottom
				font-size:.25rem
				margin-left:.05rem
</style>
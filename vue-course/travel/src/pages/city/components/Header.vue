<template>
	<div class="header">
		<router-link to='/'>
			<div class="iconfont header-back">&#xe624;</div>
		</router-link>
		城市选择
	</div>
</template>

<script>
	export default{
		name:'cityHeader'
	}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
	.header
		position:relative
		height:.86rem
		line-height:.86rem
		background:$bgColor
		text-align:center
		color:#fff
		.header-back
			position:absolute
			left:0
			top:0
			width:.64rem
			font-size:.4rem
			color:#fff
</style>
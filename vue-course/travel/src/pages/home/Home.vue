<template>
	<div class="home-wrapper">
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
		<home-recommend></home-recommend>
	</div>
</template>

<script>
	import HomeHeader from './components/Header'
	import HomeSwiper from './components/Swiper'
	import HomeIcons from './components/Icons'
	import HomeRecommend from './components/Recommend'
	export default{
		name:'home',
		components:{
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend
		}
	}
</script>

<style lang="stylus" scoped>
	.home-wrapper
		background:#f5f5f5
</style>
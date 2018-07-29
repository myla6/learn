<template>
	<div class="wrapper">
		<swiper :options="swiperOption" >
		    <swiper-slide v-for='item of list' :key="item.id">
		    	<img class="swiper-img" :src="item.imgUrl" />
		    </swiper-slide>
		    
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	export default {
		name:'HomeSwiper',
		data (){
			return {
				swiperOption:{
					pagination:'.swiper-pagination',
					loop:true
				},
				list:[{
					id:'1',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1807/a1/41a802abfc4f0202.jpg_750x200_9f0cf69c.jpg'
				},{
					id:'2',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1807/c7/369989bc3649c502.jpg_750x200_bfea4c00.jpg'
				},{
					id:'3',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1701/f1/df0a5d9e78e33e02.jpg_750x200_54d521c3.jpg'
				}]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.wrapper >>> .swiper-pagination-bullet-active
		background:#fff
	
	.wrapper
		overflow:hidden
		width:100%
		height:0
		background:#fff
		padding-bottom:31.25%
		.swiper-img
			width:100%	
</style>
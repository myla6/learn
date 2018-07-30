<template>
	<div class="contain" @click="handleClick">
		<div class="img-box">
			<swiper :options="swiperOption">
			    <swiper-slide v-for="(item,index) of list" :key="index">
			    	<img class="img-content" :src="item" />
			    </swiper-slide>
			    <div class="swiper-pagination"  slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
	export default {
		name:'commonGallary',
		props:{
			list:{
				type:Array,
				default:[]
			},
		},
		data(){
			return{
				swiperOption:{
					pagination:'.swiper-pagination',
					paginationType:'fraction',
					observer:true,
					observeParents:true
				}
			}
		},
		methods:{
			handleClick(){
				this.$emit('change')
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.contain >>> .swiper-container 
		overflow:inherit
	.contain
		z-index:999
		position:fixed
		top:0
		left:0
		right:0
		bottom:0
		display:flex
		justify-content:center
		flex-direction:column
		background:#000
		.img-box
			width:100%
			.img-content
				width:100%
				height:auto
			.swiper-pagination 
				color:#fff
				bottom:-1rem
</style>
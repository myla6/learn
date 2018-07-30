<template>
	<div class="home-wrapper">
		<home-header></home-header>
		<home-swiper :list="swiperList"></home-swiper>
		<home-icons :list="iconsList"></home-icons>
		<home-recommend :list="recommendList"></home-recommend>
		<home-weekend :list="weekendList"></home-weekend>
	</div>
</template>

<script>
	import axios from 'axios'
	import { mapState } from 'vuex' 
	import HomeHeader from './components/Header'
	import HomeSwiper from './components/Swiper'
	import HomeIcons from './components/Icons'
	import HomeRecommend from './components/Recommend'
	import HomeWeekend from './components/Weekend'

	export default{
		name:'home',
		components:{
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomeWeekend
		},
		data(){
			return {
				swiperList:[],
				iconsList:[],
				recommendList:[],
				weekendList:[],
				oldCity:''
			}
		},
		computed:{
			...mapState(['city'])
		},
		methods:{
			getHomeInfo(){
				axios.get('/api/index.json?city='+this.city).then(this.getInfoSucc)
			},
			getInfoSucc(res){
				res=res.data
				if(res.ret && res.data){
					const data=res.data;
					this.swiperList=data.swiperList;
					this.iconsList=data.iconList;
					this.recommendList=data.recommendList;
					this.weekendList=data.weekendList;
				}
			} 
		},
		mounted:function(){
			this.getHomeInfo()
			this.oldCity=this.city
		},
		activated:function(){
			if(this.oldCity !== this.city){
				this.getHomeInfo()
				this.oldCity=this.city
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.home-wrapper
		background:#f5f5f5
</style>
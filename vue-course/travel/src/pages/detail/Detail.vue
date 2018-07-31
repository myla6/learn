<template>
	<div>
		<detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
		<detail-header :sightName="sightName"></detail-header>
		<div class="content">
			<detail-list :list="list"></detail-list>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	import detailBanner from './components/Banner'
	import detailHeader from './components/Header'
	import detailList from './components/List'
	export default{
		name:'detail',
		components:{
			detailBanner,
			detailHeader,
			detailList
		},
		data(){
			return {
				sightName:'',
				bannerImg:'',
				gallaryImgs:[],
				list:[]
			}
		},
		methods:{
			getInfo(){
				axios.get('/api/detail.json',{
					params:{
						id:this.$route.params.id
					}
				}).then(this.getDataSucc)
			},
			getDataSucc(res){
				res=res.data
				if(res.ret && res.data){
					const data=res.data
					this.sightName=data.sightName
					this.bannerImg=data.bannerImg
					this.gallaryImgs=data.gallaryImgs
					this.list=data.categoryList
				}
			}
		},
		mounted(){
			this.getInfo()
		}
	}
</script>
<style lang="stylus" scoped>
	.content
		height:50rem
</style>
<template>
	<div>
		<div class="search">
			<input v-model="keyword" class="search-input" type="text" placeholder="请输入城市名或者拼音" />
		</div>
		<div class="search-content" v-show="keyword" ref="list">
			<ul>
				<li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
				<li class="search-item border-bottom" v-show="!list.length">没有找到匹配城市信息</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import { mapMutations } from 'vuex'
	export default{
		name:'citySearch',
		props:{
			cities:Object
		},
		data(){
			return{
				keyword:'',
				list:[],
				timer:null
			}
		},
		methods:{
			handleCityClick(city){
				this.changeCity(city)
				this.$router.push('/')
			},
			...mapMutations(['changeCity'])
		},
		watch:{
			keyword(){
				if(this.timer){
					clearTimeout(this.timer)
				}
				if(!this.keyword){
					this.list=[]
					return
				}
				this.timer=setTimeout(() => {
					const list=[]
					for(let i in this.cities){
						this.cities[i].forEach((value) => {
							if(value.name.indexOf(this.keyword)>-1 || value.spell.indexOf(this.keyword)>-1){
								list.push(value)
							}
						})
					}
					this.list=list
				},200)
			}
		},
		mounted(){
			this.scroll=new BScroll(this.$refs.list)
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~@/assets/styles/variables.styl'
	.search
		height:.72rem
		padding:0 .1rem
		background:$bgColor
		.search-input
			box-sizing:border-box;
			width:100%;
			padding:0 .1rem
			height:.62rem
			line-height:.62rem
			text-align:center
			border-radius:.06rem
			color:#666
	.search-content
		overflow:hidden
		position:absolute
		top:1.58rem
		left:0
		right:0
		bottom:0
		background:#eee
		z-index:1
		.search-item
			background:#fff
			line-height:.62rem
			color:#666
			padding-left:.2rem
		
</style>
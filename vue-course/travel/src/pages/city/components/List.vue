<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<h3 class="title border-topbottom">当前城市</h3>
				<ul class="btn-list">
					<li class="btn-wrapper">
						<div class="btn">{{this.curCity}}</div>
					</li>
				</ul>
			</div>
			<div class="area">
				<h3 class="title border-topbottom">热门城市</h3>
				<ul class="btn-list">
					<li class="btn-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
						<div class="btn">{{item.name}}</div>
					</li>
				</ul>
			</div>
			<div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
				<h3 class="title border-topbottom">{{key}}</h3>
				<ul class="item-list">
					<li class="item border-bottom" v-for="initem of item" :key="initem.id" @click="handleCityClick(initem.name)">{{initem.name}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import { mapState,mapMutations } from 'vuex'
	export default{
		name:'cityList',
		props:{
			hot:Array,
			cities:Object,
			letter:String
		},
		computed:{
			...mapState({
				curCity:'city'
			})
		},
		mounted(){
			this.scroll=new BScroll(this.$refs.wrapper)
		},
		watch:{
			letter(){
				if(this.letter){
					const document=this.$refs[this.letter][0];
					this.scroll.scrollToElement(document)
				}
			}
		},
		methods:{
			handleCityClick(city){
				// this.$store.commit('changeCity',city)
				this.changeCity(city)
				this.$router.push('/')
			},
			...mapMutations(['changeCity'])
		}
	}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
.border-bottom
	&:before
		border-color:#ccc
.list
	position:absolute
	top:1.58rem
	left:0
	right:0
	bottom:0
	overflow:hidden
	.title
		line-height:.54rem
		background:#eee
		padding-left:.2rem
		color:#666
		font-size:.26rem
	.btn-list
		overflow:hidden
		padding:.1rem .6rem .1rem .1rem
		.btn-wrapper
			float:left
			width:33.3%
			.btn
				margin:.1rem
				padding:.1rem 0
				text-align:center
				border-radius:.06rem
				border:.02rem solid #ccc
	.item-list
		.item
			line-height:.76rem
			padding-left:.2rem
			
</style>
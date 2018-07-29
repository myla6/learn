<template>
	<div class="icons">
		<swiper :options="swiperOption">
			<swiper-slide v-for="(page,index) of pages" :key="index">
		    	<div class="icon" v-for="item of page" :key="item.id">
					<div class="icon-img">
						<img class="icon-img-content" :src="item.imgUrl"/>
					</div>
					<p class="desc">{{item.desc}}</p>
				</div>
		    </swiper-slide>
		</swiper>
	</div>
</template>

<script>
	export default{
		name:'HomeIcons',
		data (){
			return{
				swiperOption:{
					autoplay:false
				},
				list:[{
					id:'1',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					desc:'景点门票'
				},{
					id:'2',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
					desc:'亲子游'
				},{
					id:'3',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
					desc:'云南映象'
				},{
					id:'4',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
					desc:'石林'
				},{
					id:'5',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					desc:'景点门票'
				},{
					id:'6',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
					desc:'亲子游'
				},{
					id:'7',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
					desc:'云南映象'
				},{
					id:'8',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
					desc:'石林'
				},{
					id:'9',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
					desc:'石林111'
				}]
			}
		},
		computed:{
			pages (){
				const pages=[]
				this.list.forEach((item,index) => {
					const page=Math.floor(index/8);
					if (!pages[page]) {
			          pages[page] = []
			        }
			        pages[page].push(item)
				})
				return pages
			}
		}
	}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
	.icons
		width:100%
		overflow:hidden
		height:0
		padding-bottom:53%
		background:#fff
		.icon
			float:left
			position:relative
			width:25%
			height:0
			overflow:hidden
			padding-bottom:25%
			.icon-img
				position:absolute
				top:0
				left:0
				right:0
				bottom:.4rem
				padding:.1rem
				box-sizing:border-box
				.icon-img-content
					display:block
					margin:0 auto
					height:100%
			.desc
				position:absolute
				left:0
				right:0
				bottom:0
				line-height:.4rem
				height:.4rem
				color:#333
				text-align:center
				ellipsis()
</style>
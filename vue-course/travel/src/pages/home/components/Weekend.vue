<template>
	<div class="wrapper">
		<div class="title">
			<img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="周末去哪儿">
			<span class="mp-title">周末去哪儿</span>
		</div>
		<ul>
			<li class="item-box border-bottom" v-for="item of list" :key="item.id">
				<div class="item-img-box">
					<img class="item-img" :src="item.imgUrl" />
				</div>
		        <div class="item-info">
		          <p class="item-title">{{item.title}}</p>
		          <p class="item-desc">{{item.desc}}</p>
		        </div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'HomeWeekend',
		props:{
			list:Array
		}
	}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.wrapper
	margin-top:.2rem
	background:#fff
	.title
		position:relative
		padding:.24rem 0 .26rem
		.title-img
			display:inline-block
			overflow:hidden
			height:.3rem
			width:.3rem
			margin-left:.2rem
			vertical-align:top
		.mp-title
			display:inline-block
			margin-left:.08rem
			height:.44rem
			color:#212121
			font-size:.32rem
			line-height:.44rem
	.item-img-box
		overflow:hidden
		height:0
		padding-bottom:37.09%
		.item-img
			width:100%
	.item-info
		padding:.1rem
		min-width:0
		.item-title
			line-height:.54rem
			font-size:.32rem
			ellipsis()
		.item-desc
			line-height:.4rem
			color:#616161
			ellipsis()
</style>
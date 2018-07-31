<template>
	<ul class="list">
		<li 
			class="item" 
			v-for="item of letters" 
			:key="item"
			:ref="item"
			@click="handleClick"
			@touchstart.prevent="handleTouchStart"
			@touchmove="handleTouchMove"
			@touchend="handleTouchEnd"
		>
			{{item}}
		</li>
	</ul>
</template>

<script>
	export default{
		name:'cityAlphabet',
		props:{
			cities:Object
		},
		data(){
			return {
				touchStatus:false
			}
		},
		computed:{
			letters(){
				const letters=[]
				for(let i in this.cities){
					letters.push(i)
				}
				return letters
			}
		},
		methods:{
			handleClick (e){
				this.$emit("change",e.target.innerText)
			},
			handleTouchStart(){
				this.touchStatus=true
			},
			handleTouchMove(e){
				if(this.touchStatus){
					const touchY=this.$refs['A'][0].offsetTop
					const clientY=e.touches[0].clientY-79
					const index=Math.floor((clientY-touchY)/20)
					if(index>=0 && index<this.letters.length){
						this.$emit('change',this.letters[index])
					} 

				}
			},
			handleTouchEnd(){
				this.touchStatus=false
			}
		}
	}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
.list
	display:flex
	flex-direction:column
	justify-content:center
	position:absolute
	top:1.58rem
	right:0
	bottom:0
	width:.4rem
	.item
		text-align:center
		color:$bgColor
		line-height:.4rem
</style>
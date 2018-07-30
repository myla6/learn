<template>
	<div class="city">
		<city-header></city-header>
		<city-search :cities="cities"></city-search>
		<city-list :hot="hotCities" :cities="cities" :letter="letter"></city-list>
		<city-alphabet :cities="cities" @change="handleLetterClick"></city-alphabet>
	</div>	
</template>

<script>
	import axios from 'axios'
	import cityHeader from './components/Header'
	import citySearch from './components/Search'
	import cityList from './components/List'
	import cityAlphabet from './components/Alphabet'
	export default{
		name:'city',
		components:{
			cityHeader,
			citySearch,
			cityList,
			cityAlphabet
		},
		data(){
			return{
				hotCities:[],
				cities:{},
				letter:''
			}
		},
		methods:{
			getCityInfo(){
				axios.get('/api/city.json').then(this.getCityInfoSucc)
				axios.get('/api/index.json').then(this.getInfoSucc)
			},
			getCityInfoSucc(res){
				res=res.data
				if(res.ret && res.data){
					const data=res.data;
					console.log(data);
					this.hotCities=data.hotCities;
					this.cities=data.cities;
				}
			},
			handleLetterClick(letter){
				this.letter=letter;
			}
		},
		mounted(){
			this.getCityInfo()
		}
	}
</script>

<style lang="stylus" scoped>

</style>
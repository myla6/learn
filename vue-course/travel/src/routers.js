import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City.vue'

const routers =[{
	path:'/',
	name:'Home',
	component:Home
},{
	path:'/city',
	name:'City',
	component:City
}]

export default routers

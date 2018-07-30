import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City.vue'
import Detail from '@/pages/detail/Detail.vue'

const routers =[{
	path:'/',
	name:'Home',
	component:Home
},{
	path:'/city',
	name:'City',
	component:City
},{
	path:'/detail/:id',
	name:'Detail',
	component:Detail
}]

export default routers

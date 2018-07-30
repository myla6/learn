let defaultCity='昆明'
try{
	if(localStorage.city){
		defaultCity=localStorage.city
	}
}catch(e){}

export default {
	city:defaultCity
}
function sum (arg){
	let arr = [];
	for (let i =0; i<arg.length; i++){
		arr[i]=arg.reduce(function(a, b){return a + b})
		arr[i]=arr[i]-arg[i]
	}
	return arr
}

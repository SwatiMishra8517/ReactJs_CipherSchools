function realType(type){
	return type?type.constructor.name.toLowerCase():""+type;
}

console.log(realType([]))
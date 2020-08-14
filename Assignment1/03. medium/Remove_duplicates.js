//solution 1

function removeDups(elements){
    return [...new Set(elements)]
}
//solution 2
function removeDups2(elements){
    let distinct = new Map()
    elements.forEach(e=>{
        if(distinct.get(e)!=null) distinct.set(e,distinct.get(e)+1);
        else distinct.set(e,1);
    })
    return [...distinct.keys()]
}

console.log(removeDups([1,2,6,7,3,2,1,7,6,3,4]));

console.log(removeDups2(["John", "Taylor", "John"]))
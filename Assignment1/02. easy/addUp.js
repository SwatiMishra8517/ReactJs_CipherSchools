//solution 1
function addUp(number){
    let sum = 0;
    for(let i=1;i<=number;i++) sum+=i;
    return sum;
}

//solution 2
function addUp2(number){
    return Array.from({length:number},(e,i)=>i+1).reduce((sum,element)=>sum+element,0)
}


//solution 3
function addUp3(number){
    return (number*(number+1)/2);
}

console.log(addUp(600))
console.log(addUp2(50))
console.log(addUp3(1000))
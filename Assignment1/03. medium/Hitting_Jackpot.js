//solution 1
function testJackpot(arr){
    return arr.every(e=>e==arr[0]);
}
// solution 2
function testJackpot2(arr){
    let equal = true;
    for(let i=1;i<arr.length;i++){
        if(arr[i]!=arr[i-1]) equal = false
    }
    return equal;
}

console.log(testJackpot2(["45","46","45","45"]))
console.log(testJackpot2(["Ss","Ss","Ss","Ss"]))
console.log(testJackpot(["Ss","Ss","Ss","ss"]))
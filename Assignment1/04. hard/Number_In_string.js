//solution 1
function numInStr(arr){
    return arr.filter(e=>/[0-9]+/.test(e))
    // return arr.filter(e=>new RegExp("[0-9]+").test(e))
}

//solution 2
function numInStr2(arr){
    let outArray = [];
    for(let i=0;i<arr.length;i++){
        let passed = false;
        for(let j=0;j<arr[i].length;j++){
            // console.log(arr[i],arr[i].charCodeAt(j))
            if(arr[i].charCodeAt(j)<=57 && arr[i].charCodeAt(j)>=48)
            passed  = true
        }
        if(passed){
            outArray.push(arr[i]);
        }
    }
    return outArray
}

console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]))
console.log(numInStr(["1a", "a", "2b", "b"]))
console.log(numInStr2(["abc", "ab10c", "a10bc", "bcd"]))
console.log(numInStr2(["abc", "ab10c", "a10bc", "bcd"]))
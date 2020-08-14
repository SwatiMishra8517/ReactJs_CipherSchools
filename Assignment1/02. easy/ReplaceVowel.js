let vowelMap = {a:1,e:2,i:3,o:4,u:5};

//solution 1
function replaceVowel(string){
    return string.replace(/([aeiou])/g,(e)=>vowelMap[e]);
}


//solution 2
function replaceVowel2(string){
    let final = "";
    for(i of string){
        if(vowelMap[i]) final+=vowelMap[i];
        else final+=i;
    }
    return final
}

console.log(replaceVowel2("karachi"))

console.log(replaceVowel("karachi"))
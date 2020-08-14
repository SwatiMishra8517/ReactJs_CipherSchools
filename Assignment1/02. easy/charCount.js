//solution 1
function charCount(char,string){
    let count = 0;
    for(let i in string){
        if(string[i]==char) count++;
    }
    return count;
}

//solution 2
function charCount2(char,string){
    let mod = string.replace(new RegExp(char,"g"),"");
    return string.length-mod.length;
}

console.log(charCount("a", "edabit"))

console.log(charCount2("b", "big fat bubble"))
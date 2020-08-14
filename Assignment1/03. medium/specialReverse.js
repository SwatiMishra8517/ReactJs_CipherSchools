function specialReverse(sentence,char){
    return sentence.split(" ").map(word=>{
        if(word.startsWith(char)) return word.split("").reverse().join("");
        else return word;
    }).join(" ");
}

console.log(specialReverse("peter piper picked pickled peppers","p"));

console.log(specialReverse ("word searches are super fun", "s"))
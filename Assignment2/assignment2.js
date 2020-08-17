let itemsContainer = document.getElementsByClassName("items-container")[0];
let search = document.getElementById("search");
import dishes from "./dishes.js"

showDishes([
    dishes.cupcakes[0],
    dishes.cakes[1],
    dishes.sweets[2],
])

search.addEventListener("input",e=>{
    let text = e.target.value
    let d = []
    for(let i in dishes){ d.push(dishes[i]) }
    d = d.flat(1);
    d = d.filter(e=>e.name.toLowerCase().indexOf(text.toLowerCase())>-1).slice(0,3);
    showDishes(d)
})


let buttons  = [...document.getElementsByTagName("button")]

buttons.forEach(button=>button.addEventListener("click",e=>{
    let selected = e.target.innerText.toLowerCase();
    if(selected=="all"){
        showDishes([
            dishes.cupcakes[0],
            dishes.doughnuts[1],
            dishes.sweets[0],
        ])
    }
    showDishes(dishes[selected])
}))

function showDishes(dishes){
    let output = dishes.map(e=>`<div class="item">
    <div class="item-img">
        <img alt="Cake Image" src="${e.image}"/>
    </div>
    <div class="item-info">
        <div class="name">${e.name}</div>
        <div class="price">${e.price}</div>
    </div>
</div>`)
    itemsContainer.innerHTML = output.join("")
}
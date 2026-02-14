import { pokemons } from "./data.js"


const inp = document.querySelector(".inp")
const sort = document.querySelector(".sort")
const seach = document.querySelector(".seach")
const ota = document.querySelector('.ota')

let cards = pokemons

function ProductMap() {
    ota.innerHTML = ""
    cards.map((pokemon) => {
        ota.innerHTML += `
        <div class="card">
            <h2 class="card-name">${pokemon.name}</h2>
            <img src="${pokemon.img}" alt="" class="card-img">
            <p class="card-type">${pokemon.type}</p>
            <p class="card-count">Candy count:${pokemon.candy_count}</p>
            <p class="card-weight">${pokemon.weight}</p>
            <p class="card-weaknesses">${pokemon.weaknesses}</p>
        </div>
    `

    })
}
ProductMap()


seach.addEventListener('click', () => {

    let value = inp.value.toLowerCase()
    const filteredCards = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(value))

    cards = filteredCards
    ProductMap()
})

sort.addEventListener('click',()=> {
    cards.sort((a,b)=>
        a.name.localeCompare(b.name)
    )
       ProductMap()


})
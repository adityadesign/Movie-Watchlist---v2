import { Movies } from "./movies.js"

const search = document.getElementById('searchBtn')
const input = document.getElementById('input')
const mainStart = document.getElementById('main-start')
const display = document.getElementById('main-display-movies')
let moviesIdArray =[]

async function getMovie(){
    //setTimeout is used wait till all the movies get loaded
    setTimeout(()=>{
        search.disabled = false
    },4000)
    search.disabled = true

    //API used here
    const response = await fetch(`https://www.omdbapi.com/?apikey=ff5a3bcf&s=${input.value.replace(/\s/g, "+")}&type=movie`)
    const data = await response.json()

    //For checking if the inputed value is available or not in the API
    if(data.Response === 'True'){
        moviesIdArray = data.Search.map(item => item.imdbID)
        mainStart.innerHTML = ''
        display.innerHTML = ''
    }
    else if((data.Response === 'False')){
        mainStart.innerHTML = ''
        display.innerHTML = `<div class="error">Unable to find what you’re looking for. Please try another search.<div>`
    }
    input.value = ''
    getMovieData(moviesIdArray)
}

async function getMovieData(moviesIdArray){
    //API used to get the detailed data of a particular movie
    for(let movieId of moviesIdArray){
        const response = await fetch(`https://www.omdbapi.com/?apikey=ff5a3bcf&i=${movieId}`)
        const data = await response.json()
        renderMovie(data)
    }
}

//Rendered through Movie Class which is imported
function renderMovie(data){
    const movie = new Movies(data)
    display.innerHTML += movie.getMovieHtml()
}

search.addEventListener('click', getMovie)

//EventListener to add the movies to Watchlist
display.addEventListener('click', (e)=>{
    const id = e.target.getAttribute('data-el')
    if(id){
        document.getElementById(id).innerHTML = `
            <i class="fa-solid fa-circle-check"></i>
            <div class="added">Added</div>`
        localStorage.setItem(id, id)
    }
})



import { Movies } from "./movies.js"

const display = document.getElementById('main-display-movies')
const watchlistEmpty = document.getElementById('watchlist-start')

//LocalStorage is saved in this array
let moviesIdArray = Object.keys(localStorage)

//API used to get the detailed data of a particular movie
async function getMovieData(moviesIdArray){
    for(let movieId of moviesIdArray){
        const response = await fetch(`https://www.omdbapi.com/?apikey=ff5a3bcf&i=${movieId}`)
        const data = await response.json()
        renderMovie(data)
    }
}

//Rendered through Movie Class which is imported
function renderMovie(data){
    const movie = new Movies(data)
    display.innerHTML += movie.getMovieRemoveHtml()
}

//EventListener to remove the movies from Watchlist
display.addEventListener('click', (e)=>{
    const remove = e.target.getAttribute('data-el')
    localStorage.removeItem(remove)
    moviesIdArray = moviesIdArray.filter(item => item !== remove)
    getMovieData(moviesIdArray)
    display.innerHTML = ``
    displayEmpty()
})

//To display the Watchlist is empty or not
function displayEmpty(){
    if(moviesIdArray.length === 0){
        watchlistEmpty.innerHTML = `
            <div>Your watchlist is looking a little empty...</div>
            <div>
                <a href="/index.html"><i class="fa-solid fa-circle-plus fa-lg"></i></a>
                <div>Let’s add some movies!</div>
            </div>`
    }
}

displayEmpty()
getMovieData(moviesIdArray)
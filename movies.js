export class Movies{
    constructor(data){
        Object.assign(this, data)
    }

    getMovieHtml(){
        return `
            <div class="card">
                <img class="moviePoster" src="${this.Poster}" alt="">
                <div class="movieData">
                    <div class="movieSubData1">
                        <div class="movieTitle">${this.Title}</div>
                        <img class="iconStar" src="images/Icon-star.png" alt="">
                        <div class="movieRating">${this.imdbRating}</div>
                    </div>
                    <div class="movieSubData2"> 
                        <div class="movieDuration">${this.Runtime}</div>
                        <div class="">${this.Genre}</div>
                        <div class="watchlist" id="${this.imdbID}">
                            <img class="addWatchlist" data-el="${this.imdbID}" src="images/Icon-watchlist.png" alt="">
                            <div>Watchlist</div>
                        </div>
                    </div>
                    <div class="bio">${this.Plot}</div>
                </div>
            </div> `
    }

    getMovieRemoveHtml(){
        return `
            <div class="card">
                <img class="moviePoster" src="${this.Poster}" alt="">
                <div class="movieData">
                    <div class="movieSubData1">
                        <div class="movieTitle">${this.Title}</div>
                        <img class="iconStar" src="images/Icon-star.png" alt="">
                        <div class="movieRating">${this.imdbRating}</div>
                    </div>
                    <div class="movieSubData2"> 
                        <div class="movieDuration">${this.Runtime}</div>
                        <div class="">${this.Genre}</div>
                        <div class="watchlist" id="${this.imdbID}">
                            <img class="addWatchlist" data-el="${this.imdbID}" src="images/Icon-remove.png" alt="">
                            <div>Remove</div>
                        </div>
                    </div>
                    <div class="bio">${this.Plot}</div>
                </div>
            </div> `
    }
}
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
                        <i class="fa-solid fa-star fa-sm iconStar" style="color: #fff700;"></i>
                        <div class="movieRating">${this.imdbRating}</div>
                    </div>
                    <div class="movieSubData2"> 
                        <div class="movieDuration">${this.Runtime}</div>
                        <div class="">${this.Genre}</div>
                        <div class="watchlist" id="${this.imdbID}">
                            <i class="fa-solid fa-circle-plus fa-lg fa-flip addWatchlist" data-el="${this.imdbID}"></i>
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
                        <i class="fa-solid fa-star fa-sm iconStar" style="color: #fff700;"></i>
                        <div class="movieRating">${this.imdbRating}</div>
                    </div>
                    <div class="movieSubData2"> 
                        <div class="movieDuration">${this.Runtime}</div>
                        <div class="">${this.Genre}</div>
                        <div class="watchlist" id="${this.imdbID}">
                            <i class="fa-solid fa-circle-minus fa-lg addWatchlist" data-el="${this.imdbID}"></i>
                            <div>Remove</div>
                        </div>
                    </div>
                    <div class="bio">${this.Plot}</div>
                </div>
            </div> `
    }
}
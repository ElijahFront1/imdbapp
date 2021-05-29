import axios from "axios";

export const fetchMovie = async (searchValue) => {
    try {
        const response = await axios.get(`https://www.omdbapi.com/?t=${searchValue}&apikey=4fff3540&plot=full`);
        if (response.data.Title) {
            sessionStorage.setItem('imdbID', response.data.imdbID);
            return response.data
        } else {
            sessionStorage.setItem('imdbID', '');
            return false
        }
    } catch (e) {
        alert(e)
    }
}

export const fetchMovieById = async () => {
    try {
        const response = await axios.get(`https://www.omdbapi.com/?i=${sessionStorage.getItem('imdbID')}&apikey=4fff3540&plot=full`)
        return response.data
    } catch (e) {
        alert(e)
    }
}

export const fetchSimilarMoviesList = async () => {
    try {
        const options = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/title/get-more-like-this',
            params: { tconst: sessionStorage.getItem('imdbID'), currentCountry: 'US', purchaseCountry: 'US' },
            headers: {
                'x-rapidapi-key': '2253e1fd85mshadb2daf917a20b9p12d8a3jsn8efe7d558bf7',
                'x-rapidapi-host': 'imdb8.p.rapidapi.com'
            }
        };

        const response = await axios.request(options)
        return response.data
    } catch (e) {
        alert(e)
    }
}

export const fetchTrailer = async () => {
    try {
        const trailerOptions = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/title/get-videos',
            params: { tconst: sessionStorage.getItem('imdbID'), limit: '1', region: 'US' },
            headers: {
                'x-rapidapi-key': '2253e1fd85mshadb2daf917a20b9p12d8a3jsn8efe7d558bf7',
                'x-rapidapi-host': 'imdb8.p.rapidapi.com'
            }
        };

        const response = await axios.request(trailerOptions)
        return response.data
    } catch (e) {
        alert(e)
    }
}

export const fetchSimilarMovieData = async (imdbID) => {
    try {
        const response = await axios.get(`https://www.omdbapi.com/?i=tt${imdbID.replace(/[^0-9]/g, '')}&apikey=4fff3540&plot=short`)
        return response.data
    } catch (e) {
        alert(e)
    }
}

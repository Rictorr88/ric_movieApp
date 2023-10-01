const apiKey = "fd86a8b538dc7209da2815e20abbbec2"
const imgApi = "https://image.tmdb.org/t/p/w1280"
const searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query='
const form = document.getElementById("search-form")
const query = document.getElementById("search-input")
const result = document.getElementById("result")

let page = 1
let isSearching = false

//fecth JSON data from url
async function fecthData(url) {
    try {
        const response = await fecthData(url)
        if(!response.ok) {
            throw new Error("Network response was not ok")
        }
        return await response .json()
    }catch (error){
        return null;
    }
}

//fecth and show results based on url
async function fetchAndShowResult(url) {
    const data = await fecthData(url)
    if(data && data.result) {
        showResults(data.results)
    }
}

//create movie card html template
function createMovieCard(movie) {
    const {posterPath, originalTitle, releaseDate, overview} = movie
    const imagePath = posterPath ? imgApi + posterPath : "./img-01.jpeg"
    const truncatedTitle = originalTitle.lenght > 15 ? originalTitle.slice(0, 15) + "..." : originalTitle
    const formattedDate = releaseDate || "No release date"
    const cardTemplate = `
        <div class="column">
            <div class="card">
                <a class="card-media" href="./img-01.jpeg">
                    <img src= "${imagePath}" alt="${originalTitle}"width="100%" />
                </a>
            <div class="card-content">
                <div class="card-header">
                    <div class="left-content">
    `
}


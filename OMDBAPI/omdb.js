

const apiKey = 'https://www.omdbapi.com/?i=tt3896198&apikey=c997e31e&t='

let spinnerStatus = false
let movieTitle = document.getElementById('title')
let movieYear = document.getElementById('year')
let movieGenre = document.getElementById('genre')
let movieDuration = document.getElementById('duration')
let movieRelease = document.getElementById('released')
let movieLanguage = document.getElementById('language')
let movieImdbRate = document.getElementById('imdbRate')
let movieCriticsLike = document.getElementById('criticsLike')
let movieMetaScore = document.getElementById('Metascore')
let movieStory = document.getElementById('Story')
let movieDirector = document.getElementById('Director')
let movieWriter = document.getElementById('Writer')
let movieActors = document.getElementById('Actor')
let movieAward = document.getElementById('Award')
let movieBoxoffice = document.getElementById('Boxoffice')
let moviePoster = document.getElementById('moviePoster')
let spinnerContainer = document.getElementById('spinner-container')
let introContainer = document.getElementById('intro-container')
let movieContainer = document.getElementById('movieContainer')
let errorContainer = document.getElementById('errorContainer')
let pageContainer = document.getElementById('pageContainer')
let noteContainer = document.getElementById('note-container')
let footer = document.getElementById('footer')
let searchInput = document.getElementById('inputData')

movieContainer.style.display = 'none'
errorContainer.style.display = 'none'
noteContainer.setAttribute('style', 'display:none !important')

footer.classList.add('border-top', 'mt-2', 'fixed-bottom')

pageContainer.classList.add('align-items-center')

pageLoader()

function fetchData(){

    // To fix the error from API side, when the record is not found then it was displaying the previous search result
    let blankText = ''
    movieTitle.innerText = blankText
    movieYear.innerText = blankText
    movieGenre.innerText = blankText
    movieDuration.innerText = blankText
    movieRelease.innerText = blankText
    movieLanguage.innerText = blankText
    movieImdbRate.innerText = blankText
    movieCriticsLike.innerText = blankText
    movieMetaScore.innerText = blankText
    movieStory.innerText = blankText
    movieDirector.innerText = blankText
    movieWriter.innerText = blankText
    movieActors.innerText = blankText
    movieAward.innerText = blankText
    movieBoxoffice.innerText = blankText
    moviePoster.src = blankText

    footer.classList.add('fixed-bottom')
    movieContainer.style.display = 'none'

    spinnerStatus = true
    pageLoader()
    noteContainer.setAttribute('style', 'display:none !important')

    let Query = searchInput.value
    
    if(Query.length<3){
        searchInput.classList.remove('is-valid')
        searchInput.classList.add('is-invalid')

        alert("Please enter a valid Movie's name")
        spinnerStatus = false
        pageLoader()
        introContainer.style.display = 'block'
        noteContainer.setAttribute('style', 'display:none !important')
    }
    else{
        searchInput.classList.remove('is-invalid')
        searchInput.classList.add('is-valid')

        introContainer.style.display = 'none'
        
        let apiQuery = apiKey+Query
        fetch(apiQuery).then((jsonData)=>{
            return jsonData.json()
        }).then((movieData)=>{
    
            if(movieData.Error != 'Movie not found!'){
                spinnerStatus = false
                pageLoader()
                pageContainer.classList.remove('align-items-center')
                movieContainer.style.display = 'block'
                noteContainer.style.display = 'block'
                errorContainer.style.display = 'none'
    
                footer.classList.remove('fixed-bottom')
        
                movieTitle.innerText = movieData.Title
                movieYear.innerText = movieData.Year
                movieGenre.innerText = movieData.Genre
                movieDuration.innerText = movieData.Runtime
                movieRelease.innerText = movieData.Released
                movieLanguage.innerText = movieData.Language
                movieImdbRate.innerText = movieData.Ratings[0].Value
                movieCriticsLike.innerText = movieData.Ratings[1].Value
                movieMetaScore.innerText = movieData.Metascore
                movieStory.innerText = movieData.Plot
                movieDirector.innerText = movieData.Director
                movieWriter.innerText = movieData.Writer
                movieActors.innerText = movieData.Actors
                movieAward.innerText = movieData.Awards
                movieBoxoffice.innerText = movieData.BoxOffice
                moviePoster.src = movieData.Poster
                console.log(movieData)
            }
            else{
                errorContainer.style.display = 'block'
                noteContainer.style.display = 'block'
                footer.classList.remove('fixed-bottom')
                spinnerStatus = false
                pageLoader()
            }
        })
    }
}

function pageLoader(){
    if(spinnerStatus==false){
        // spinnerContainer.style.display = 'none'
        spinnerContainer.setAttribute('style', 'display:none !important')
    }
    else{
        spinnerContainer.style.display = 'block'
    }
}

searchInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        fetchData()
    }
  })
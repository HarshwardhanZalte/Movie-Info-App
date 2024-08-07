const movieInput = document.querySelector('#movieInput')
const search = document.querySelector('#search')
const movieName = document.querySelector('#movieName')
const gerne = document.querySelector('#gerne')
const plot = document.querySelector('#plot')
const year = document.querySelector('#year')
const date = document.querySelector('#date')
const due = document.querySelector('#due')
const direct = document.querySelector('#director')
const writer = document.querySelector('#writer')
const actor = document.querySelector('#actor')
const country = document.querySelector('#country')

const defaultMovie = 'iron man'

function updateUI(data){
    movieName.innerHTML = data.Title
    gerne.innerHTML = data.Genre
    plot.innerHTML = data.Plot
    year.innerHTML = data.Year
    data.innerHTML = data.Released
    due.innerHTML = data.Runtime
    direct.innerHTML = data.Director
    writer.innerHTML = data.Writer
    actor.innerHTML = data.Actors
    country.innerHTML = data.Country
    document.querySelector('img').src = data.Poster
}

function fetchMovie(MName) {
    fetch(`https://www.omdbapi.com/?t=${MName}&apikey=a9cc1d1d`)
        .then(res => {
            if (!res.ok) throw new Error('Movie not found');
            return res.json();
        })
        .then(data => updateUI(data))
        .catch(error => {
            console.error(error.message);
            alert(`${MName} not found..!`);
        });
}

search.addEventListener('click', function () {
    const MName = movieInput.value;
    if (!MName) {
        alert("Enter Movie Name.");
        return;
    }
    fetchMovie(MName);
});

window.addEventListener('load', function () {
    fetchMovie(defaultMovie);
});
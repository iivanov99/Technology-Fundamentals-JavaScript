function solve(input) {
    let movies = []

    for (let line of input) {
        if (line.includes('add movie')) {
            let name = line
                .split('add movie ')
                .filter(Boolean)
                .shift()

            movies.push({ name: name })
        } else if (line.includes('directed by')) {
            let [name, director] = line.split(' directed by ')
            let foundMovie = movies.find(el => el.name === name)

            if (foundMovie) {
                foundMovie.director = director
            }
        } else {
            let [name, date] = line.split(' on date ')
            let foundMovie = movies.find(el => el.name === name)

            if (foundMovie) {
                foundMovie.date = date
            }
        }
    }

    for (let movie of movies) {
        if (movie.hasOwnProperty('director') && movie.hasOwnProperty('date')) {
            let movieAsJSON = JSON.stringify(movie)
            console.log(movieAsJSON)
        }
    }
}
solve(['add movie Fast and Furious',
    'add movie Godfather',
    'Inception directed by Christopher Nolan',
    'Godfather directed by Francis Ford Coppola',
    'Godfather on date 29.07.2018',
    'Fast and Furious on date 30.07.2018',
    'Batman on date 01.08.2018',
    'Fast and Furious directed by Rob Cohen']
)
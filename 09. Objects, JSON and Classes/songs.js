function solve(input) {
    class Song {
        constructor(type, name, length) {
            this.type = type
            this.name = name
            this.lengt = length
        }
    }

    let songs = []
    let typeSearched = input.pop()
    let n = input.shift()


    for (let i = 0; i < n; i++) {
        let parts = input[i]
            .split('_')
            .filter(Boolean)
        let songType = parts[0]
        let songName = parts[1]
        let songLength = parts[2]

        songs.push(new Song(songType, songName, songLength))
    }

    if (typeSearched === 'all') {
         songs.forEach((i) => console.log(i.name))
    } else {
        let filteredSongs = songs
            .filter((i) => i.type === typeSearched)
        filteredSongs.forEach((i) => console.log(i.name))
    }
}
solve(['3',
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])
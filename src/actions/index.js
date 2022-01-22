
// Action creator
export const selectSong = (song) => {
    //returning a action
    return {
        type: 'SONG-SELECTED',
        payload: song
    }
}
export const selectMovie = (movie) => {
    //returning a action
    return {
        type: 'MOVIE-SELECTED',
        payload: movie
    }
}

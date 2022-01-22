
// Action creator
export const selectSong = (song) => {
    //returning a action
    return {
        type: 'SONG-SELECTED',
        payload: song
    }
}

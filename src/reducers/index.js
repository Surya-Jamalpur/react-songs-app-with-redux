
import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Ammo Ammayenaa', duration: '5:20' },
        { title: 'Gaali Chirugaali', duration: '5:20' },
        { title: 'Baala Baala', duration: '5:20' },
        { title: 'Emi cheyamanduve', duration: '5:20' },
        { title: 'Moula Mere Moula Mere', duration: '5:20' }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG-SELECTED') {
        return action.payload
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})








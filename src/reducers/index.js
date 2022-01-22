
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
const upcomingMoviesReducer = () => {
    return [
        { title: 'RRR', wallPoster: 'https://m.media-amazon.com/images/M/MV5BNjg4Y2RiN2YtYmQzOS00NWZhLTlhNDQtZDA1Zjk2MGRmMDc2XkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_.jpg' },
        { title: 'KGF2', wallPoster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6GxCu8Ogd0WhxdbsVrq7ootKdHGLROxAL6g&usqp=CAU' },
        { title: 'Aacharya', wallPoster: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202104/Acharya_release_postponed_Chir_1200x768.jpeg?zLFNWp1GD1cuS8FBtzf8BFF89pHsbuk.&size=1200:675' },
        { title: 'Sarkaaru vaari Pata', wallPoster: 'https://www.tollywood.net/wp-content/uploads/2022/01/Sarkaru-Vaari-Paata-First-Review-Totally-MINDBLOWING.jpg' },
        { title: 'Raadhe Shyaam', wallPoster: 'https://images.hindustantimes.com/img/2021/10/20/1600x900/prabhas_pooja_hegde_1632276868188_1634729370947.jpg' }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG-SELECTED') {
        return action.payload
    }
    return selectedSong;
}
const selectedMovieReducer = (selectedMovie = null, action) => {
    if (action.type === 'MOVIE-SELECTED') {
        return action.payload
    }
    return selectedMovie;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
    upcomingMovies: upcomingMoviesReducer,
    selectedMovie: selectedMovieReducer
})








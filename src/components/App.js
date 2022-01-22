import React from 'react';
import SongList from './SongList';
import MovieList from './MovieList';
import SongDetails from './SongDetails';
import MovieDetails from './MovieDetails';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetails />
                </div>
            </div>
            <div className="ui row">
                <div className="column eight wide">
                    <MovieList />
                </div>
                <div className="column eight wide">
                    <MovieDetails />
                </div>
            </div>
        </div>
    )
}
export default App;
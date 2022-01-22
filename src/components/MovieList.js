import React from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions'

const MovieList = ({ movies, selectMovie }) => {
    const renderMoviesList = () => {
        return movies.map((movie) => {
            return (
                <div className="item" key={movie.title}>
                    <div className="right floated content">
                        <button onClick={() => selectMovie(movie)} className="ui button primary">Select</button>
                    </div>
                    <div className="content">{movie.title}</div>
                </div>
            )
        })
    }

    return <div className="ui divided list">{renderMoviesList()}</div>
}
const mapStateToProps = (state) => {
    return { movies: state.upcomingMovies }
}
export default connect(mapStateToProps, { selectMovie })(MovieList);
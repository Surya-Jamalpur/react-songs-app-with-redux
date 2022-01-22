import React from 'react';
import { connect } from 'react-redux';

const MovieDetails = ({ movie }) => {
    if (!movie) {
        return <h3>Please Select a Movie to get the Details</h3>
    }
    return (
        <div>
            <h3>Movie Name : {movie.title}</h3>
            <img src={movie.wallPoster} style={{ maxWidth: "100%" }} />
        </div>

    )
}
const mapStateToProps = (state) => {
    return { movie: state.selectedMovie }
}
export default connect(mapStateToProps)(MovieDetails);
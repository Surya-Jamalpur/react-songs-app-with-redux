import React, { Component } from 'react';
import { connect } from 'react-redux';


const SongDetails = ({ song }) => {
    // the above song is destructured from props obj 
    if (!song) {
        return (
            <div>PLease select a song fron the list.</div>
        )
    }
    return (
        <div>
            <h3>Details of Song</h3>
            <h4>Title: {song.title}</h4>
            <h5>Duration:  {song.duration}</h5>
        </div>
    )

}
const mapStateToProps = (state) => {
    return { song: state.selectedSong };
}
export default connect(mapStateToProps)(SongDetails);
/* eslint-disable prettier/prettier */
import React from 'react';
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';

function RecVideo({ videoId }) {

    const VideoOnReady = (event) => {
        event.target.pauseVideo();
    };

    const opts = {
        height: "350px",
        width: "600px",
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <YouTube videoId={videoId} opts={opts} onReady={VideoOnReady} />
    );
}

RecVideo.propTypes = {
    videoId: PropTypes.string.isRequired,
};

export default RecVideo;

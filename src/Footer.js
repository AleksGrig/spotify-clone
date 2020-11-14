import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import { Grid, Slider } from '@material-ui/core'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'


function Footer() {
    return (
        <div className='footer'>
            <div className="footer__left">
                <img
                    className="footer__albumLogo"
                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/music-album-cover-template-design-a40171b854804ea96d95d72c77f9de60.jpg?ts=1586168941://d1csarkz8obe9u.cloudfront.net/posterpreviews/music-album-cover-template-design-a40171b854804ea96d95d72c77f9de60.mp4?ts=https://d1csarkz8obe9u.cloudfront.net/posterpreviews/music-album-cover-template-design-a40171b854804ea96d95d72c77f9de60.jpg"
                    alt=""
                />
                <div className="footer__songInfo">
                    <h4>Mull of Kintyre</h4>
                    <p>Paul McCartney</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item >
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer

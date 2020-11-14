import React from 'react'
import './Body.css'
import Header from './Header'

function Body({ spotify }) {
    return (
        <div className='body'>
            <Header spotify={spotify} />

            <div className="body__info">
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/retro-car-80%27s-cd-album-cover-video-template-design-1ee47e43d25a0ca6dbbf4573a6dfb647.jpg" alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weelky</h2>
                    <p>description...</p>
                </div>
            </div>
        </div>
    )
}

export default Body

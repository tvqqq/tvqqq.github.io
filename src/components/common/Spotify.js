import React, { Component } from 'react'
import axios from 'axios'

/**
* Spotify
*/
class Spotify extends Component {
    state = {
        playing: false,
        song: '',
        artist: '',
        url: ''
    }

    async componentDidMount() {
        axios.get('https://sam.tatviquyen.name.vn/spotify/playing')
            // axios.get('http://127.0.0.1:3000/spotify/playing')
            .then(result => {
                this.setState({
                    playing: result.data.playing,
                    song: result.data.song,
                    artist: result.data.artist,
                    url: result.data.url,
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <p className="site-spotify-playing">
                <svg id="icon-audio-disc" className={this.state.playing ? 'playing' : ''} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
                    <path stroke="#fff" d="M32 2a30 30 0 1 0 30 30A30 30 0 0 0 32 2zm0 58a28 28 0 1 1 28-28 28 28 0 0 1-28 28z" />
                    <path d="M32 6A26 26 0 0 0 6 32h2A24 24 0 0 1 32 8zM32 56v2a26 26 0 0 0 26-26h-2a24 24 0 0 1-24 24z" />
                    <path stroke="#fff" d="M32 52v2a22 22 0 0 0 22-22h-2a20 20 0 0 1-20 20z" />
                    <path stroke="#fff" d="M46 32a14 14 0 1 0-14 14 14 14 0 0 0 14-14zm-26 0a12 12 0 1 1 12 12 12 12 0 0 1-12-12z" />
                    <path stroke="#fff" d="M41 32a9 9 0 1 0-9 9 9 9 0 0 0 9-9zm-16 0a7 7 0 1 1 7 7 7 7 0 0 1-7-7z" />
                    <path d="M36 32a4 4 0 1 0-4 4 4 4 0 0 0 4-4zm-6 0a2 2 0 1 1 2 2 2 2 0 0 1-2-2zM6 34h2v2H6z" />
                </svg>
                <div class="song-information">
                    {this.state.playing ?
                        <a href={this.state.url}>{this.state.song} - {this.state.artist}</a>
                        : <span>paused...</span>
                    }
                </div>
            </p>
        )
    }
}

export default Spotify

import React, {useState, useRef, useEffect} from 'react'
import Home from './Home';
import PlayerControls from './PlayerControls'

const Player = (props) => {

  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    
      if(isPlaying) {
        audioEl.current.play();
      }else{
        audioEl.current.pause();
      }
  });

  const skipSong = (forwards = true) => {
    if (forwards) {
        props.setcurrentSongIndex(() => {
            let temp = props.currentSongIndex;
            temp++;

            if (temp > props.songs.length - 1) {
                temp = 0;
            }

            return temp;
            
        });
    } 
    
    else {
        props.setcurrentSongIndex(() => {
            let temp = props.currentSongIndex;
            temp--;

            if (temp < 0) {
                temp = props.songs.length - 1;
            }

            return temp;
        });
    }

}

  

  return (
    <div>
  

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
      <div class="container">
        <div className='col'>
          <div className='d-flex'>
            <img src={props.songs[props.currentSongIndex].img} className="player_img"/>
            
          </div>
      </div>

      <div className='col'>
        <h1>{props.songs[props.currentSongIndex].title}</h1>
      </div>

      <div className='col'>
        <PlayerControls skipSong={skipSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying}  />
      </div>

      <div className='col'>
        <p><strong>Next Song</strong> <span>{props.songs[props.nextSongIndex].title} <strong>by</strong> {props.songs[props.nextSongIndex].artist}</span></p>
      </div>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

    
      
      
    </div>
  </div>
</nav>

    </div>
  )
}

export default Player
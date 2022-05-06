import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Player from './component/Player';
import Home from './component/Home';
import { myMusic } from './component/Song';

function App() {

  const [songs, setSongs] = useState(myMusic);

  const [currentSongIndex, setcurrentSongIndex] = useState(0);
  const [nextSongIndex, setnextSongIndex] = useState(0);
 

  useEffect(() => {
    setnextSongIndex(()=>{
      if(currentSongIndex + 1 > songs.length - 1){
        return 0;
      }else{
        return currentSongIndex + 1;
      }
    })
    
  }, [currentSongIndex]);
  return (
    <div className="App">
    <Home setcurrentSongIndex={setcurrentSongIndex} setSongs={setSongs} setnextSongIndex={setnextSongIndex} currentSongIndex={currentSongIndex}/>
      <Player currentSongIndex = {currentSongIndex} setcurrentSongIndex={setcurrentSongIndex}
        nextSongIndex={nextSongIndex} songs={songs}
      />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import "../Styles/episodePlayer.css"

function EpisodePlayer({ episode, images }) {
  
  const [loading, setLoading] = useState(true);
 
  
  useEffect(() => {
    setLoading(false); 
  }, [episode]);
  

  if (!episode) {
    return <div>Loading...</div>;
  }

  console.log(episode)
  return (
    <div className='episode-player'>
      <div className='episode-info'>
        <img src={images} />
        <h1>{episode.title}</h1>
      </div>
      <audio controls src={episode.file} />
    </div>
    // <div>
    //   <h1>{episode.title}</h1>
    //   <p>{episode.description}</p>
    //   <audio controls src={episode.audio} />
    //   <button onClick={() => onPlay(episode.audio, episode.title)}>Play</button>
    //   {/* <button onClick={handleFavorite}>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button> */}
    // </div>
  );
}

export default EpisodePlayer;
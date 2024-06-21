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
        <img src={images} className='episode-image'/>
        <div className='episode-detail'>
            <h1 className='episode-title'>{episode.title}</h1>
        </div> 
      </div>
      <div className='audio-controls'>
        <audio controls src={episode.file} />
      </div>
      
    </div>
   
  );
}

export default EpisodePlayer;
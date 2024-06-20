import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import "../Styles/showDetails.css"

function ShowDetail() {
    const { id } = useParams();
    const [show, setShow] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedSeason, setSelectedSeason] = useState(null);

    useEffect(() => {
        fetch(`https://podcast-api.netlify.app/id/${id}`)
          .then(response => response.json())
          .then(data => {
            setShow(data);
            setLoading(false);
          })
          .catch(error => console.error('Error fetching show:', error));
    }, [id]);

    const handleSeasonSelect = (seasonIndex) => {
        setSelectedSeason(show.seasons[seasonIndex])
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='show-detail'>
      <div className='show-info'>
        <img src={show.image}/>
        <h1>{show.title}</h1>
        <p>{show.description}</p>
      </div>
      <div className='episodes-list'>
        <h2>Seasons</h2>
        <select onChange={(e) => handleSeasonSelect(e.target.value)}>
            <option>Select a season</option>
            {show.seasons.map((season, index) => (
                <option value={index} key={index}>
                    Season {season.season}
                </option>
            ))}
        </select>
        {selectedSeason && (
            <div className='episodes'>
                {selectedSeason.episodes.map((episode, index) => (
                    <div key={index} className='episode'>
                        <div className='image-div'>
                            <img src={selectedSeason.image}/>
                        </div>
                        <h3>{episode.title}</h3>
                        <p>{episode.description}</p>
                    </div>
                ))}
            </div>
        )}
        
      </div>
    </div>
    )

}

export default ShowDetail
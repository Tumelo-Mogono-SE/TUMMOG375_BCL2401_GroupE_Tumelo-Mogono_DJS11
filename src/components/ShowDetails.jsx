import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import EpisodePlayer from './EpisodePlayer';
import { CiHeart } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import Loading from './Loading';
import "../Styles/showDetails.css"

function ShowDetail() {
    const { id } = useParams();
    const [show, setShow] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedSeason, setSelectedSeason] = useState(null);
    const [selectedEpisode, setSelectEpisode] = useState(null);

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
        setSelectedSeason(show.seasons[seasonIndex]);
        setSelectEpisode(null);
    }

    const handleEpisodeSelect = (episodeIndex) => {
        setSelectEpisode(selectedSeason.episodes[episodeIndex]);
    }

    const handleAddToFavourites = (episode, show, season) => {
        const newFavourite = {
            episode,
            show,
            season,
            addedAt: new Date().toISOString()
        };

        const storedFavourites = localStorage.getItem('favourites');
        const favourites = storedFavourites ? JSON.parse(storedFavourites) : [];
        favourites.push(newFavourite);
        localStorage.setItem('favourites', JSON.stringify(favourites));
    };

    if (loading) {
        return <Loading />;
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
                <select onChange={(event) => handleSeasonSelect(event.target.value)}>
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
                                <div className='bottom-of-episode'>
                                    <FaPlay onClick={() => handleEpisodeSelect(index)}/>
                                    <CiHeart onClick={() => handleAddToFavourites(episode, show, selectedSeason)}/>
                                </div>
                            </div>  
                        ))}
                    </div>
                )}
            </div>
            {selectedEpisode && (
                <div className='episode-player'>
                    <EpisodePlayer episode={selectedEpisode} images={selectedSeason.image}/>
                </div>
            )}
        </div>
    )

}

export default ShowDetail
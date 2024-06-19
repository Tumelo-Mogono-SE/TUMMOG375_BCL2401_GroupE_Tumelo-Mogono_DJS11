import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import genreMappings from '../genreMapping';
import "../Styles/showList.css"

function ShowList() {
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://podcast-api.netlify.app')
          .then(response => response.json())
          .then(data => {
            setShows(data);
            setLoading(false);
          })
          .catch(error => console.error('Error fetching shows:', error));
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    

    return (
        <div className='show-list'>
            <h1>All Shows</h1>
            <div className='category'>
                {shows.map(show => (
                <div className='category-info' key={show.id}>
                    <Link to={`/show/${show.id}`}>
                    <div className='img-div'>
                    <img src={show.image} alt={show.title} />
                    </div>
                        <p className='category-name'>{show.title}</p>
                        <p>Genres: {show.genres.map(genre => genreMappings[genre]).join(', ')}</p>
                        <p>Seasons: {show.seasons}</p>
                    </Link>
                </div>
                ))}
            </div>
        </div>
    )
}

export default ShowList
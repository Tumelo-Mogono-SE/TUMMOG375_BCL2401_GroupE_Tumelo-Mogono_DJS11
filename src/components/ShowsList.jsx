import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SortButtons from './SortButtons';
import genreMappings from '../genreMapping';
import Loading from './Loading';
import "../Styles/showList.css"

function ShowList() {
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortedShows, setSortedShows] = useState([]);
    const [selectedSort, setSelectedSort] = useState('AZ');

    useEffect(() => {
        fetch('https://podcast-api.netlify.app')
          .then(response => response.json())
          .then(data => {
            const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
            setShows(sortedData);
            setSortedShows(sortedData);
            setLoading(false);
          })
          .catch(error => console.error('Error fetching shows:', error));
    }, []);

    const handleSort = (sortedShows) => {
        setSortedShows(sortedShows);
    }

    const handleSelectSort = (sortType) => {
        setSelectedSort(sortType);
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className='show-list'>
            <div className='controls'>
                <SortButtons shows={shows} onSort={handleSort} selectedSort={selectedSort} onSelectSort={handleSelectSort} />
            </div>
            <h1>All Shows</h1>
            <div className='category'>
                {sortedShows.map(show => (
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
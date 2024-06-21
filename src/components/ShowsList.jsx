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
                    <Link to={`/show/${show.id}`} className='category-info' key={show.id}>
                        <div>
                            <div className="img-div">
                                <img src={show.image} alt={show.title} />
                            </div>
                            <div className="card-information">
                                <div className="main-info">
                                    <div className="category-name">{show.title}</div>
                                    <div className="description">Genres: {show.genres.map(genre => genreMappings[genre]).join(', ')}</div>
                                    <div className="seasons-info">
                                        <div className="season">
                                            <div className="season-number">Seasons: {show.seasons}</div>
                                        </div>
                                        <div className="updated">Updated: {show.updated}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ShowList


import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import SortButtons from './SortButtons';
import '../Styles/favourite.css';

function Favourite() {
    const [favourites, setFavourites] = useState([]);
    const [selectedSort, setSelectedSort] = useState('AZ');

    useEffect(() => {
        const storedFavourites = localStorage.getItem('favourites');
        if (storedFavourites) {
            setFavourites(JSON.parse(storedFavourites));
        }
    }, []);

    const handleRemoveFavourite = (episodeId) => {
        const updatedFavourites = favourites.filter(fav => fav.episode.id !== episodeId);
        setFavourites(updatedFavourites);
        localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
    };

    const handleSort = (sortedItems) => {
        setFavourites(sortedItems);
    };

    const handleSelectSort = (sortType) => {
        setSelectedSort(sortType);
    };

    return (
        <div className='favourites'>
            <div className='controls'>
                <SortButtons shows={favourites} onSort={handleSort} selectedSort={selectedSort} onSelectSort={handleSelectSort}/>
            </div>
            <h1>Favourite Episodes</h1>
            <div className='episodes'>
                {favourites.map((fav, index) => (
                    <div key={index} className='episode'>
                        <div className='image-div'>
                            <img src={fav.season.image} alt={fav.episode.title} />
                        </div>
                        <h3>{fav.episode.title}</h3>
                        <p>{fav.episode.description}</p>
                        <p>Show: {fav.show.title}, Season: {fav.season.season}</p>
                        <p>Added on: {new Date(fav.addedAt).toLocaleString()}</p>
                        <div className='bottom-of-episode'>
                            <FaTrash onClick={() => handleRemoveFavourite(fav.episode.id)} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Favourite;
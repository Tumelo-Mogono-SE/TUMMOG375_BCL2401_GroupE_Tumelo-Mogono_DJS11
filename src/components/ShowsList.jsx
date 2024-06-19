import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import genreMappings from '../genreMapping';

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
    
      console.log(shows)

    return (
        <>
        </>
    )
}

export default ShowList
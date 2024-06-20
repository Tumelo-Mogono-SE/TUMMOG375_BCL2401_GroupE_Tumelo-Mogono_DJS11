import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ShowDetail() {
    const { id } = useParams();
    const [show, setShow] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://podcast-api.netlify.app/id/${id}`)
          .then(response => response.json())
          .then(data => {
            setShow(data);
            setLoading(false);
          })
          .catch(error => console.error('Error fetching show:', error));
    }, [id]);

    console.log(show)

    return (
        <>
        </>
    )

}

export default ShowDetail
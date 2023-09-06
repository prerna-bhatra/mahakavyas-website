import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './home.css'


const Home = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const apiUrl = 'https://doubtful-pear-squid.cyclic.cloud/puran/'; // Replace with your API URL

        // Make a GET request to the API
        fetch(apiUrl)
            .then((response) => response.json())
            .then((responseData) => {
                setData(responseData);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="home">
            <h1>Welcome to Our Mahakavya Sangrah</h1>
            {isLoading ? (
                <p>Loading data...</p>
            ) : (
                <div className="data-container">
                    {data.data.map((item) => (
                        <div className="data-card" key={item.id}>
                                          <Link to={`/chapter/${item._id}`}>

                            <img style={{ maxHeight: '300px', width: '100%', objectFit: 'cover' }}
                                src={item.image} alt={item.name} />
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './chapter.css'

const Chapter = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    console.log({ id });

    useEffect(() => {
        fetchData(id);
    }, [id]);

    const fetchData = async (id) => {
        try {
            const response = await fetch('https://doubtful-pear-squid.cyclic.cloud/puran/chapterByPuran', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    puranId: id
                }),
            });

            const jsonResponse = await response.json();

            setData(jsonResponse.data)
            setIsLoading(false)
        } catch (error) {
            console.error('Error making POST request:', error);
        }
    };

    console.log({ data });

    return (
        <div className="chapter">
            {isLoading ? (
                <p>Loading data...</p>
            ) : (
                <div className="chapter-container">
                    {data.map((item) => (
                        <div className="chapter-card" key={item.puranId}>
                            <h2>{item.title}</h2>
                            <p>{item.content}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Chapter;

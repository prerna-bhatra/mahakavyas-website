// src/components/Stories.js

import React, { useState, useEffect } from 'react';
import './story.css'


const Stories = () => {
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedStory, setSelectedStory] = useState(null);

    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const apiUrl = `https://doubtful-pear-squid.cyclic.cloud/stories?page=${currentPage}&limit=10`; // Replace with your API URL

        // Make a GET request to the API
        fetch(apiUrl)
            .then((response) => response.json())
            .then((responseData) => {
                setData(responseData.results);
                setTotalPages(responseData.totalPages)
                setSelectedStory(responseData.results[0])
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, [currentPage]);


    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const changeStory = (index) => {
        setSelectedStory(data[index])
    }

    return (
        <>
            {/* <h1>Stories</h1> */}
            {isLoading ? (
                <p>Loading data...</p>
            ) : (
                <div className="story-container">
                    <div className="story-list">
                        <h2>List</h2>
                        <ul>
                            {data.map((story, index) => (
                                <li key={index} onClick={() => changeStory(index)} >
                                    {index + 1}. {story.title}
                                </li>
                            ))}
                        </ul>
                        <div className="pagination">
                            <button onClick={handlePrevious} disabled={currentPage === 1}>
                                Previous
                            </button>
                            <span className="page-numbers">
                                {currentPage} of {totalPages}
                            </span>
                            <button onClick={handleNext} disabled={currentPage === totalPages}>
                                Next
                            </button>
                        </div>
                    </div>

                    <div className="selected-story">
                        {selectedStory && (
                            <div className="book-page">
                                <h3>{selectedStory.title}</h3>
                                <p>{selectedStory.content}</p>
                            </div>
                        )}
                    </div>

                </div>)}
        </>

    );
};

export default Stories;

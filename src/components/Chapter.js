import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { SayButton } from 'react-say';

import './chapter.css'

const Chapter = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();
    // console.log({ id });

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

    const handleListen = (chapterContent) => {


    }

    const handlePause = (id) => {

    }

    const handleStop = (id) => {


    }

    const handleResume = (id) => {

    }

    const copyContent = (textContent) => {

        const contentToCopy = textContent;

        navigator.clipboard.writeText(contentToCopy)
            .then(() => {
                // console.log('Content copied to clipboard:', contentToCopy);
                alert("Text copied to clipboad")
            })
            .catch((err) => {
                console.error('Error copying content to clipboard:', err);
            });
        // }
    };


    return (
        <div className="chapter">
            {isLoading ? (
                <p>Loading data...</p>
            ) : (
                <div className="chapter-container">
                    {data.map((item, index) => (
                        <div className="chapter-card" key={item.puranId}>
                            <h2>अध्याय {index + 1} : {item.title}</h2>
                            <div className="button-container">
                                <button onClick={() => copyContent(item.content)}>Copy</button>
                                <button onClick={() => handleListen(item.content)}>Audio</button>
                                {/* <button onClick={() => handlePause(item.content)}>Pause</button>
                                <button onClick={() => handleResume(item.content)}>Resume</button>
                                <button onClick={() => handleStop(item.content)}>Stop</button> */}

                            </div>
                            <p>{item.content}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

 {/* <SayButton
                                    onClick={event => console.log(event)}
                                    speak="A quick brown fox jumped over the lazy dogs."
                                >
                                    Tell me a story
                                </SayButton> */}
export default Chapter;

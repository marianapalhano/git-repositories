import React, { useEffect, useState } from 'react';

export default function Repositories() {
    const [ repositories, setRepositories ] = useState([]);
    useEffect(() => {
        const repNames = JSON.parse(localStorage.getItem('repNames'));
        setRepositories(repNames);
        localStorage.clear();
    }, []);  
     
    return(
        <>
            <h1>Repository List</h1>
            <ul>
                {
                    repositories.map(repository => {
                        return (
                            <li>{repository}</li>
                        )
                        }
                    )
                }
            </ul>
        </>
    );
}
import React, { useState } from 'react';
import axios from 'axios';

export default function Home() {
    const [user, setUser] = useState('');
    function handleSearch() {
        axios.get(`https://api.github.com/users/${user}/repos`).then(response => {
            const repNames = response.data.map(rep => rep.name);
            localStorage.setItem('repNames', JSON.stringify(repNames));
        });
    }

    return(
        <>
            <h1>Git Repository Search</h1>
            <input type="text" value={user} onChange={e => setUser(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
        </>
    );
}
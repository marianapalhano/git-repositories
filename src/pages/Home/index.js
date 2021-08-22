import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Home() {
    const [user, setUser] = useState('');
    const history = useHistory();
    
    function handleSearch() {
        axios.get(`https://api.github.com/users/${user}/repos`).then(response => {
            const repNames = response.data.map(rep => rep.name);
            localStorage.setItem('repNames', JSON.stringify(repNames));
            history.push('./repositories');
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
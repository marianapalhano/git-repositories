import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import * as Styled from './styled';
import logo from '../../assets/git.png';

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
        <Styled.Container>
            <img src={logo} alt="Git Logo" />
            <Styled.Title>Git Repository Search</Styled.Title>
            <div>
                <Styled.Input type="text" value={user} onChange={e => setUser(e.target.value)} placeholder="Username" />
                <Styled.Button onClick={handleSearch}>Search</Styled.Button>
            </div>
        </Styled.Container>
    );
}
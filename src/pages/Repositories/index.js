import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styled';

export default function Repositories() {
    const [ repositories, setRepositories ] = useState([]);
    useEffect(() => {
        const repNames = JSON.parse(localStorage.getItem('repNames'));
        setRepositories(repNames);
        //localStorage.clear();
    }, []);  
     
    return(
        <Styled.Container>
            <Styled.Title>Repository List</Styled.Title>
            <Styled.List>
                {
                    repositories.map(repository => {
                        return (
                            <Styled.Item>{repository}</Styled.Item>
                        )
                        }
                    )
                }
            </Styled.List>
            <Link to="/">{`< `}Back</Link>
        </Styled.Container>
    );
}
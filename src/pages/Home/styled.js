import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    max-width: 991px;
    height: calc(100vh - 54px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Title = styled.h1`
    font-size: 40px;
    text-align: center;
`
export const Input = styled.input`
    border: 1px solid #2D232E;
    border-radius: 8px 0 0 8px;
    height: 2.4rem;
    padding: 4px 8px;
    &:focus,
    &:active {
        outline: none;
    }
`
export const Button = styled.button`
    border: 1px solid #2D232E;
    background: #2D232E;
    color: #F1F0EA;
    border-radius: 0 8px 8px 0;
    height: 2.4rem;
    padding: 4px 8px;
`
import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: calc(100vh - 50px);
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    color: white;
    white-space: pre-wrap;
    text-align: center;

    @media (max-width: 500px) {
        font-size: 1.4rem;
    }
`

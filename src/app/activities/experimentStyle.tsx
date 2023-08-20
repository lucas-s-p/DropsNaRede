import styled from "styled-components";

export const Experiments = styled.div`
    width: 100%;
    height: 400px;
    background-color: red;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Experiment = styled.button`
    background-color: blue;
    font-size: 2rem;
    transition: width 1s ease;
    
    &:hover {
        width: 100px;
    }
`

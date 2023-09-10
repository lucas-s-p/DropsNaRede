import styled from "styled-components";

export const Container = styled.header`
    width: 100vw;
    display: flex;
    flex-direction: column;
`

export const CuriositiesTextDestaque = styled.text`
    font-weight: bold;
    font-size: 2rem;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
`

export const Destaques = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 100vw;

    @media (max-width: 1149px) {
        display: none;
    }
`

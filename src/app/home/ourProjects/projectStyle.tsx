import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    @media (min-width: 0px) and (max-width: 599px) {
        height: 1200px;
        background-color: blue;
    }
`

export const ProjectBox = styled.div`
    width: 90%;
    padding: 0px 20px 0px 20px;
    height: 350px;
    background-color: blue;
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;

    @media (min-width: 800px) and (max-width: 1000px) {
        height: 300px;
    }

    @media (min-width: 600px) and (max-width: 799px) {
        height: 260px;
    }

    @media (min-width: 0px) and (max-width: 599px) {
        flex-direction: column;
        height: 2000px;
        justify-content: space-evenly;
    }

`

export const NavProject = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    background-color: white;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 1.4rem;
    border-bottom: 2px solid black;

    @media (min-width: 600px) and (max-width: 799px) {
        font-size: 1rem;
    }
`

export const Project = styled.div`
    width: 32%;
    height: 310px;
    cursor: pointer;
    overflow-y: hidden;

    &:hover {
        width: calc(32% +10px);
        height: 320px;
    }

    @media (min-width: 800px) and (max-width: 1000px) {
        height: 260px;
    }

    @media (min-width: 600px) and (max-width: 799px) {
        height: 220px;
    }

    @media (min-width: 0px) and (max-width: 599px) {
        width: 80vw;
        height: 80vw;
        border: 4px solid white;
    }
`

export const ProjectImage = styled.img`
    width: 100%;
    height: calc(100% - 50px);
    background-color: #000053;
    object-fit: cover;
`

export const TextProject = styled.text`
    color: white;
    font-size: 2rem;
    font-weight: 500;

    @media (min-width: 0px) and (max-width: 599px) {
        text-align: center;
        height: 150px;
    }
`

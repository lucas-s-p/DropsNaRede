import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    @media (min-width: 0px) and (max-width: 599px) {
        height: 270px;
        background-color: blue;
        padding: 20px 0px 20px 0px;
    }
`

export const ProjectBox = styled.div`
    width: 100%;
    padding: 0px 20px 0px 20px;
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    height: 340px;
    gap: 6px;
    justify-content: space-evenly;

    @media (min-width: 800px) and (max-width: 1000px) {
        height: 300px;
    }

    @media (min-width: 600px) and (max-width: 799px) {
        height: 260px;
    }

    @media (min-width: 0px) and (max-width: 599px) {        
        justify-content: space-between;
        display: none;
    }

`

export const ProjectBoxMobile = styled.div`
    width: 100%;
    padding: 0px 20px 0px 20px;
    height: 350px;
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    height: 300px;
    gap: 6px;
    justify-content: space-evenly;
    display: none;

    @media (min-width: 800px) and (max-width: 1000px) {
        height: 300px;
    }

    @media (min-width: 600px) and (max-width: 799px) {
        height: 260px;
    }

    @media (min-width: 0px) and (max-width: 599px) {        
        display: flex;
        justify-content: space-between;
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
    font-size: 1.2rem;
    border-bottom: 2px solid black;

    @media (min-width: 600px) and (max-width: 799px) {
        font-size: 1rem;
    }
`

export const Project = styled.div`
    width: 32%;
    height: 340px;
    cursor: pointer;
    overflow-y: hidden;

    @media (min-width: 800px) and (max-width: 1000px) {
        height: 260px;
    }

    @media (min-width: 450px) and (max-width: 799px) {
        height: 220px;
        
    }

    @media (min-width: 0px) and (max-width: 449px) {
        width: 50vw;
        height: 50vw;
        border: 4px solid white;   
    }
`

export const ProjectImage = styled.img`
    width: 100%;
    height: calc(100% - 20px);
    background-color: white;
    object-fit: cover;
`

export const TextProject = styled.text`
    color: white;
    font-size: 2rem;
    font-weight: 500;

    @media (min-width: 0px) and (max-width: 599px) {
        text-align: center;
        height: 150px;
        font-size: 1.6rem;
    }
`

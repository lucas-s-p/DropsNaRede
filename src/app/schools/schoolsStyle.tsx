import styled from "styled-components";

export const Container = styled.nav`
    min-height: 100vh;
    background-color: white;
`

export const MessageContainer = styled.nav`
    width: 100vw;
    height: calc(100vh - 50px);
    background-color: #000053;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MessageView = styled.div`
    width: 60%;
    height: 60%;
    background-color: white;
    border: 4px solid blue;
    border-radius: 10px;
    box-shadow: 0 0 8px blue;
    transition: box-shadow 0.3s, width 0.3s, height 0.3s;

    &:hover {
        box-shadow: 0 0 20px blue;
        width: 90%;
        height: 80%;
    }

    display: none;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "professor school";
`

export const ProfessorContainer = styled.div`
    grid-area: professor;
    width: 100%;
    height: 100%;
`

export const SchoolContainer = styled.div`
    grid-area: school;
    width: 100%;
    height: 100%;
`

export const Introduction = styled.div`
    width: 60%;
    height: 60%;
    background-color: white;
    border-radius: 10px;
`

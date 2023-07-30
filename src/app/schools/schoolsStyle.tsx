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

    display: none;
    position: relative;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "professor school";

    @media (min-width: 0px) and (max-width: 800px) {
        grid-template-rows: 500px 500px;
        grid-template-columns: 1fr;
        grid-template-areas: "professor" "school";
        overflow-y: scroll;
    }
`

export const ProfessorContainer = styled.div`
    grid-area: professor;
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    flex-direction: column;
    bottom: 0px;
    transition: background-color 1s ease;

    ${MessageView}:hover & {
        background-color: blue;
    }
`

export const SchoolContainer = styled.div`
    grid-area: school;
    width: 100%;
    height: 100%;
    transition: background-color 1s ease;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;

    ${MessageView}:hover & {
        background-color: blue;
    }
`

export const Introduction = styled.div`
    width: 60%;
    height: 60%;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 20px;

    @media (min-width: 0px) and (max-width: 800px) {
        width: 90%;
    }
`

export const ResponseArea = styled.div`
    width: 90%;
    height: 80px;
    display: flex;
    margin-left: 2%;
    flex-direction: column;
`

export const TextTitle = styled.div`
    font-size: 1rem;
    font-weight: bold;
    display: flex;
    height: 40p;
    flex-direction: column;
    justify-content: center;

    ${MessageView}:hover & {
        color: white;
    }
`

export const Input = styled.input`
    width: 90%;
    height: 40px;

    @media (min-width: 0px) and (max-width: 800px) {
        width: 100%;
    }
`

export const IndroductionButton = styled.button`
    width: 200px;
    height: 50px;
    border-radius: 10px;
    background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 10px;
    color: white;
    font-weight: bold;
    border: 2px solid black;
    cursor: pointer;
    text-transform: uppercase;
    margin-top: 20px;

    &:hover {
        color: blue;
        background-color: white;
    }
`

export const MessageGeral = styled.textarea`
    width: 94%;
    height: 60%;
    margin-top: 16px;
    min-width: 94%;
    min-height: 60%;
    max-width: 94%;
    max-height: 60%;

    @media (min-width: 800px) and (max-width: 1000px) {
        margin-top: 44px;
    }
`

export const TitleContact = styled.h2`
    margin-left: 2%;
    
    ${MessageView}:hover & {
        color: white;
    }
`

export const TitleContactMessage = styled.h2`
    ${MessageView}:hover & {
        color: white;
    }
`

export const TitleContainer = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

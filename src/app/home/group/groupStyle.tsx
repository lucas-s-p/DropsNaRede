import styled, { keyframes } from "styled-components";
import background from "../../assets/about.svg";

export const Container = styled.div`
    width: 100%;
    height: 650px;
    margin-top: 40px;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media(min-width: 0px) and (max-width: 1150px) {
        height: 1100px;
    }
`

export const TitleGroup = styled.text`
    width: 90%;
    font-size: 2rem;
    color: white;
    text-align: center;
`

export const GroupContainer = styled.div`
    width: 94%;
    height: 80%;
    margin-top: 80px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    justify-content: center;

    @media(min-width: 0px) and (max-width: 1090px) {
        overflow-y: scroll;
    }

    @media (min-width: 1090px) {
        justify-content: flex-start;
    }
`

export const CardGroup = styled.div`
    width: 196px;
    height: 250px;
    position: relative;
    border: 2px solid white;
    overflow: hidden;
    cursor: pointer;

    @media(min-width: 820px) and (max-width: 1150px) {
        width: 246px;
    }

    @media(min-width: 820px) and (max-width: 1150px) {
        width: 246px;
    }

    @media(min-width: 820px) and (max-width: 1150px) {
        width: 246px;
    }

    @media(min-width: 450px) and (max-width: 670px) {
        width: calc(50% - 20px);
        height: 400px;
    }

    @media(min-width: 0px) and (max-width: 449px) {
        width: 90%;
        height: 400px;
    }
`

export const NameContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid white; 
    color: white;
`

export const Name = styled.text`
    font-size: 1.4rem;
    font-weight: 500;
`

const slideUpAnimation = keyframes`
    from {
        transform: translateY(100%);
    }
    to {
        transform: translateY(0);
    }
`;

export const Modal = styled.div<{ isVisible: boolean }>`
    position: absolute;
    bottom: ${props => (props.isVisible ? "0" : "-340px")};
    left: 0;
    width: 160px;
    height: 170px;
    background-color: white;
    color: #fff;
    padding: 20px;
    transition: bottom 0.3s;
    animation: ${slideUpAnimation} 0.3s ease-in-out;
  
    @media(min-width: 820px) and (max-width: 1150px) {
        width: 246px;
    }

    @media(min-width: 820px) and (max-width: 1150px) {
        width: 246px;
    }

    @media(min-width: 820px) and (max-width: 1150px) {
        width: 246px;
    }

    @media(min-width: 450px) and (max-width: 670px) {
        width: calc(50% - 20px);
    }

    @media(min-width: 0px) and (max-width: 449px) {
        width: 90%;
    }
`;

export const TitleModalContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TitleModal = styled.text`
    width: 100%;
    font-size: 0.8rem;
    color: blue;
    color: blue;
`

export const DescriptionModal = styled.text`
    font-size: 0.8rem;
    margin-top: 20px;
    color: black;
`

export const Image = styled.img`
    width: 100%;
    calc(100% - 50px);
    position: absolute;
    bottom: 0;
`

export const Link = styled.text`
    color: blue;
    font-size: 0.8rem;
    position: absolute;
    bottom: 20px;
    left: 20px;
    cursor: pointer;
    font-style: italic;

    &:hover {
        color: red;
    }
`

import styled, { keyframes } from "styled-components";
import background from "../../assets/backgroundHeader.jpg";

export const Container = styled.nav`
    height: calc(100vh - 50px);
    flex-direction: column;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "header1 header2";
    overflow: hidden;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: 0px) and (max-width: 900px) {
        display: flex;
        align-items: center;
        padding: 40px;
    } 
`

export const Header1 = styled.header`
    grid-area: header1;
    display: flex;
    padding: 0px 20px 0px 20px;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;

    @media (min-width: 0px) and (max-width: 900px) {
        align-items: center;
        width: 70%;
    } 

    @media (min-width: 0px) and (max-width: 599px) {
        width: 98%;
        align-items: center;
    }
`

export const Header2 = styled.header`
    grid-area: header2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

const neonGlow = keyframes`
  0%, 100% {
    text-shadow: 
        0 0 10px #fff, 
        0 0 20px #fff, 
        0 0 30px #fff, 
        0 0 40px #ff00e1, 
        0 0 70px #ff00e1, 
        0 0 80px #ff00e1, 
        0 0 100px #ff00e1, 
        0 0 150px #ff00e1;
  }
  50% {
    text-shadow: none;
  }
`;

export const TitleRede = styled.text`
    font-size: 2.4rem;
    font-weight: 500;
    color: white;
    text-shadow: 
        0 0 10px #fff, 
        0 0 20px #fff, 
        0 0 30px #fff, 
        0 0 40px #ff00e1, 
        0 0 70px #ff00e1, 
        0 0 80px #ff00e1, 
        0 0 100px #ff00e1, 
        0 0 150px #ff00e1;
    animation: ${neonGlow} 6s ease-in-out infinite;
`

export const SubtitleRede = styled.text`
    font-size: 1.4rem;
    color: white;
    margin-top: 10px;
`

export const ImageHeader = styled.img`
    padding: 20px 20px 20px 20px;
    width: 540px;
    height: 530px;

    @media (min-width: 0px) and (max-width: 599px) {
        width: 80vw;
        height: 80vw;
    }
`
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 30px 3.5vw 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start; 

    @media (min-width: 550px) {
        gap: 4.4vw;
    }

    @media (min-width: 777px) {
        gap: 4vw;
    }

    @media (max-width: 550px) {
        padding: 0px 0px 0px 0px;
    }

`

export const Curiosity = styled.div`
    width: 20vw;
    height: 20vw;
    border: 2px solid black;

    @media (max-width: 550px) {
        width: 100vw;
        height: 90vw;
        margin-top: 30px;
        border: 2px solid black;
        padding: 2px 0px 0px 2px;
    }
`

export const SquareContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const BottomText = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-weight: bold;
    font-size: 1rem;
`

export const Image = styled.img`
  width: 100%;
  height: 80%;
  transition: opacity 0.3s ease-in-out;
  object-fit: cover;
`;

export const TextOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;
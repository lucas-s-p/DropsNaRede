import styled, { keyframes } from "styled-components";

interface Props {
    index: number;
}

export const Container = styled.nav`
    height: calc(100vh - 50px);
`

export const ActivityContainer = styled.div`
    width: 100%;
    height: calc(100% - 2px);
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "navBarVertical activity";
    border-top: 2px solid black;

    @media (min-width: 0px) and (max-width: 680px) {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
        grid-template-areas: "activity";
        display: none;
    }
`

export const NavBarVertical = styled.div`
    grid-area: navBarVertical;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    align-items: center;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 0px) and (max-width: 680px) {
        display: none;
    }
`

const fadeInWithDelay = keyframes`
    0% {
        opacity: 0;
    },
    100% {
        opacity: 1;
    }
`;

export const BottomBar = styled.button<Props>`
    width: 96%;
    height: 50px;
    border: 0px;
    transition: background-color 0.5s ease-in-out;
    margin-top: 6px;
    animation: ${fadeInWithDelay} 0.5s ease;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding-left: 4px;

    animation-delay: ${(props) => props.index * 0.5}s;

    &:hover {
        background-color: blue;
    }
`

export const Activity = styled.div`
    grid-area: activity;
    overflow: hidden;
    width: 100%;
`

export const Introduction = styled.div`
    width: 100%;
    height: 100%;
    background-color: blue;
`

export const PdfEmbed = styled.embed`
    width: 100%;
    height: 100%;
`

export const AtividadesTextContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: bold;
    border: 1px solid black;
`

export const AtividadeText = styled.text`
    display: flex;
    font-size: 1rem;
    font-weight: bold;
    margin-left: 10px;
`

export const ActivityContainerMobile = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 680px) {
        display: none;
    }
`

export const LineContainer = styled.div`
    width: 96%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
`

export const TextButton = styled.text`
    font-size: 1.3rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-weight: 500;
`

export const DownloadButton = styled.button`
    width: 70px;
    height: 80%;
    border-radius: 8px;
    background-color: blue;
    border: 0px;
    color: white;
    font-weight: bold;
`

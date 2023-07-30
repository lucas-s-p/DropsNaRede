import styled, { keyframes } from "styled-components";

interface Props {
    index: number;
}

export const Container = styled.nav`
    height: 100vh;
`

export const ActivityContainer = styled.div`
    width: 100%;
    height: calc(100% - 52px);
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "navBarVertical activity";
    border-top: 2px solid black;

    @media (min-width: 0px) and (max-width: 680px) {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
        grid-template-areas: "activity";
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
    width: 100%;
    height: 100%;
`

export const Introduction = styled.div`
    width: 100%;
    height: 100%;
    background-color: red;
`

export const PdfEmbed = styled.embed`
    width: 100%;
    height: 100%;
`

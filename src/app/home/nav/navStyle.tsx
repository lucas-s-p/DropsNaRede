import styled from "styled-components";

export const NavContainer = styled.nav`
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    padding: 0px 20px 0px 20px;
    justify-content: space-between;

    @media (min-width: 0px) and (max-width: 680px) {
        padding: 0px 0px 0px 0px;
    }
`

export const PageDrops = styled.div`
    width: 160px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000053;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        color: #2C79DC;
    }

    @media (min-width: 681px) and (max-width: 930px) {
        font-size: 0.7rem;
    }

`

export const NavPages = styled.div`
    width: 68%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (min-width: 551px) and (max-width: 930px) {
        width: calc(100% - 250px);
    }

    @media (min-width: 0px) and (max-width: 680px) {
        display: none;
    }
`

export const NavImageDrops = styled.img`
    width: 40px;
    height: 40px;
    object-fit: contain;
    cursor: pointer;
    left: 0;
`

export const ContainerDesktop = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 0px) and (max-width: 550px) {
        display: none;
    }
`

export const ContainerMobile = styled.div`
    width: 100%;
    height: 50px;
    display: none;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 0px) and (max-width: 550px) {
        display: flex;
    }
`

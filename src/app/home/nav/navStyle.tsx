import styled from "styled-components";

export const NavContainer = styled.nav`
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    padding: 0px 20px 0px 20px;
    justify-content: space-between;
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
`

export const NavPages = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (min-width: 0px) and (max-width: 550px) {
        display: none;
    }
`

export const NavImageDrops = styled.img`
    width: 140px;
    height: 100%;
    object-fit: contain;
    cursor: pointer;
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

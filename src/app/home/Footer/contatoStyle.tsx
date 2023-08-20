import styled from "styled-components";

export const Contact = styled.nav`
    min-height: 200px;
    background-color: white;
    margin-top: 50px;
    overflow-y: hidden;

    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas: 'footer1 footer2 footer3';

    @media (max-width: 500px) {
        grid-template-rows: 1fr 120px;
        grid-template-columns: 1fr;
        grid-template-areas: 'footer2' 'footer3';
    }
`

export const Footer1 = styled.div`
    width: 100%;
    height: 100%;
    grid-area: footer1;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;

    @media (max-width: 500px) {
        height: 300px;
        display: none;
    }
`

export const DropsImage = styled.img`
    width: 50%;
    height: 50%;
    object-fit: contain;

    @media (max-width: 500px) {
        width: 200px;
        height: 200px;
        display: none;
    }    
`

export const Footer2 = styled.div`
    width: 100%;
    height: 100%;
    grid-area: footer2;
    display: flex;
    justify-content: center;
    padding: 10px;
    background-color: white;
    position: relative;
    
    @media (max-width: 500px) {
        height: 200px;
    }
`

export const Footer3 = styled.div`
    width: 100%;
    height: 100%;
    grid-area: footer3;
    display: flex;
    background-color: white;
    padding: 10px;
    flex-direction: column;
    position: relative;
    align-items: center;

    @media (max-width: 500px) {
        height: 200px;
    }
`

export const CopyRightDropsTextF2 = styled.text`
    color: #382D8B;
    font-weight: 500;
    font-size: 0.8rem;
    text-align: center;
    bottom: 10px;
    font-family: Arial, sans-serif;
    position: absolute;
    bottom: 0px;

    @media (max-width: 500px) {
        display: none;
    }
`

export const CopyRightDropsTextF3 = styled.text`
    color: #382D8B;
    font-weight: 500;
    font-size: 0.8rem;
    text-align: center;
    bottom: 10px;
    font-family: Arial, sans-serif;
    position: absolute;
    bottom: 0px;

    @media (min-width: 500px) {
        display: none;
    }
`


export const FooterTitle = styled.text`
    color: #382D8B;
    font-weight: bold;
    font-size: 1.2rem;
    font-family: Arial, sans-serif;
    text-align: center;
`

export const FooterTitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const RedeSocialTextFooter = styled.text`
    color: #382D8B;
    font-weight: bold;
    font-size: 0.9rem;
    font-family: Arial, sans-serif;
    left: 10px;
    margin-top: 14px;
    cursor: pointer;
`

export const Separator = styled.div`
    height: 20px;
`

export const ContactContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const TextContact = styled.text`
    font-size: 0.8rem;
    color: #382D8B;
    left: 10px;
    margin-top: 10px;
`

export const ContainerFooterContact = styled.div`
    display: flex;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
`

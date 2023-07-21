import styled from "styled-components";

export const ContactContainer = styled.nav`
    min-height: 600px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`

export const ContactBanner = styled.div`
    width: 80%;
    height: 400px;
    border-radius: 4px;
    background: linear-gradient(45deg, red, blue);

    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "imageContainer emailContainer";

    @media (min-width: 0px) and (max-width: 1000px) {
        min-height: 800px;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: "emailContainer" "imageContainer";
    }
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    grid-area: imageContainer;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const EmailContainer = styled.div`
    width: 100%;
    height: 100%;
    grid-area: emailContainer;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const EmailContainerCenter = styled.div`
    width: 90%;
    height: 90%;

    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "firstName lastName" "email phone" "message message" "message message" "send .";

    @media (min-width: 0px) and (max-width: 1000px) {
        grid-template-rows: 1fr 1fr 1fr 1fr 2fr 1fr;
        grid-template-columns: 1fr;
        grid-template-areas: "firstName" "lastName" "email" "phone" "message" "send";
    }   
`

export const Image = styled.img`
    width: 80%;
    height: 80%;
`

export const FirstName = styled.div`
    grid-area: firstName;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const LastName = styled.div`
    grid-area: lastName;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const Email = styled.div`
    grid-area: email;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const Phone = styled.div`
    grid-area: phone;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const Message = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: message;
    width: 100%;
    height: 100%;
`

export const Send = styled.div`
    grid-area: send;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Input = styled.input`
    width: 90%;
    height: 70%;
    border-radius: 10px;
    border-width: 2px;
    border-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InputMessage = styled.textarea`
    width: 95%;
    height: 70%;
    border-radius: 10px;
    border-width: 2px;
    border-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 0px) and (max-width: 1000px) {
        width: 90%;
    }
`

export const ButtonSend = styled.button`
    width: 90%;
    height: 90%;
    border-radius: 10px;
    background-color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 0px) and (max-width: 1000px) {
        width: 60%;
    }
`

export const TextSend = styled.text`
    font-size: 1rem;
    color: black;
    font-weight: bold;
`

export const TextTitle = styled.text`
    font-size: 2rem;
    font-weight: 500;
    color: white;

    @media (min-width: 0px) and (max-width: 1000px) {
        margin-bottom: 40px;
    }

`

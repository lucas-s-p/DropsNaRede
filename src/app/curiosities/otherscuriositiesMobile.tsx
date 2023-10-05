import styled from "styled-components";
import { data } from "./data";

export default function OthersCuriosities() {

    const open = (link: string) => {
        window.open(link);
    }
    return (
            <ContainerGeral>
                {data.slice(0,data.length).map(({image, about, title, link}) =>
                    <Container>
                        <BackgroundImage image={image}></BackgroundImage>
                        <Text onClick={() => open(link)}>{title}</Text>
                        <Text2>{about}</Text2>
                    </Container>
                )}
            </ContainerGeral>
    )
}

const ContainerGeral = styled.div`
    width: 100vw;
    flex-direction: column;
    display: flex;
    gap: 2px;

    @media (min-width: 451px) {
        flex-direction: row;
        flex-wrap: wrap;
    }

    @media (min-width: 1000px) {
        display: none;
    }

`

const Container = styled.div`
    width: 100vw;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    border: 2px solid black;
    margin-top: 10px;

    @media (max-width: 450px) {
        width: 100vw;
    }

    @media (min-width: 451px) and (max-width: 750px) {
        width: calc(50vw - 6px);
    }
    
    @media (min-width: 751px) and (max-width: 1000px) {
        width: calc(32.8vw - 2px);
    }
`

interface PostContainerProps {
    image: string;
}
const BackgroundImage = styled.div<PostContainerProps>`
    width: 100%;
    height: 200px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
`

const Text = styled.button`
    border: 0px;
    width: 100%;
    height: 50px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.5s ease-in-out;

    &:hover {
        background-color: green;
    }
`


const Text2 = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 0px 20px 0px;
`
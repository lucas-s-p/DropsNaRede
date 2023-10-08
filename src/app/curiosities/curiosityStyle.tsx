import styled, { keyframes } from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const widthPostAnimation = keyframes`
    from {
        width: 200px;
    }
    to {
        width: 300px;
    }
`

const resetWidthPostAnimation = keyframes`
    from {
        width: 300px;
    }
    to {
        width: 200px;
    }
`

interface PostContainerProps {
    image: string;
}

export const PostContainer = styled.button<PostContainerProps>`
    width: 200px;
    height: 400px;
    border: 0px;
    transform: skew(0deg);
    position: relative;

    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;

    &:hover {
        animation: ${widthPostAnimation} 0.8s ease forwards;
    }

    &:not(:hover) {
        animation: ${resetWidthPostAnimation} 0.3s ease forwards;
    }
`

export const PostTop = styled.div`
    width: 100%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    left: 0px;
    text-align: center;
    color: black;
    font-weight: bold;
    font-size: 1.3rem;
`

export const AboutPost = styled.text`
    color: white;
    display: none;
    font-weight: bold;
    font-size: 1rem;

    ${PostContainer}:hover & {
        display: flex;
    }
`

export const ButtonOpen = styled.button`
    width: 94%;
    height: 40px;
    border-radius: 7px;
    background-color: green;
    position: absolute;
    bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    transform: skew(0deg);
    border: 0px;
    cursor: pointer;

    &:hover {
        background-color: #078a2a;
    }
`

export const DescriptionPost = styled.text`
    color: white;
    font-weight: bold;
    font-size: 1rem;

    ${PostContainer}:hover & {
        display: none;
    }
`

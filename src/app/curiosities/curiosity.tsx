import { useState } from "react";
import {AboutPost, ButtonOpen, PostContainer, DescriptionPost, PostTop } from "./curiosityStyle";

interface Props {
    title: string, image: string, about: string, link: string, description: string
}

export default function Curiosity(props: Props) {
    const [mouse, setMouse] = useState<Boolean>(false);

    return (
        <PostContainer image={props.image} onMouseEnter={() => setMouse(!mouse)} onMouseLeave={() => setMouse(!mouse)}>
            <PostTop>{props.title}</PostTop>
            <AboutPost>{props.about}</AboutPost>
            <DescriptionPost>{props.description}</DescriptionPost>
            <ButtonOpen onClick={() => window.open(props.link)}>{mouse ? "Visualizar" : "Abrir Página"}</ButtonOpen>
        </PostContainer>
    )
}

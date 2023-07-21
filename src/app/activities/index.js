import React, { useEffect, useState } from "react";
import { Container } from "./activitiesStyle";
import Nav from "../home/nav";
import ReactMarkdown from "react-markdown";
import arquivo from "./content.md";
import remarkGfm from "remark-gfm";

export default function Activities() {
    const [textoDoArquivo, setTextoDoArquivo] = useState("");

    fetch(arquivo).then((response) => response.text()).then((text) => {
        setTextoDoArquivo(text);
    })

    return (
    <Container>
        <Nav />
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{textoDoArquivo}</ReactMarkdown>
    </Container>
  );
}

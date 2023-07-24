import { useRef } from "react";
import { Container } from "./homeStyle";
import Header from "./header";
import Nav from "./nav";
import React from "react";
import Projects from "./ourProjects";
import Contact from "./Contact";
import Footer from "./Footer";
import Group from "./group";
import { Provider } from "./Provider";

export default function Home() {
    const scrollRef = useRef(null);

    return (
        <Provider.Provider value={{scrollRef}}>
            <Container>
                <Nav/>
                <Header/>
                <Projects/>
                <Group/>
                <Contact/>
                <Footer/>
            </Container>
        </Provider.Provider>
    )
}

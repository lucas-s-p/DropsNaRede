import { Component } from "react";
import { Container } from "./homeStyle";
import Header from "./header";
import Nav from "./nav";
import React from "react";
import Projects from "./ourProjects";
import Contact from "./Contact";
import Footer from "./Footer";
import Group from "./group";

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Nav/>
                <Header/>
                <Projects/>
                <Group/>
                <Contact/>
                <Footer/>
            </Container>
        )
    }
}

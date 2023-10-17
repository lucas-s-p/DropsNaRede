import { useRef } from "react";
import { Container } from "./homeStyle";
import Header from "./header";
import Nav from "./nav";
import Projects from "./ourProjects";
import Contact from "./Contact";
import Footer from "./Footer";
import Group from "./group";
import { Provider } from "./Provider";
import { Helmet } from "react-helmet";
import Activities from "./activities";
import AboutDrops from "./about/AboutDrops";

export default function Home() {
    const scrollRef = useRef(null);

    return (
        <Provider.Provider value={{scrollRef}}>
            <Container>
                <Helmet>
                    <title>Drops na Rede | Home</title>
                    <meta name="Drops na Rede | Home" content="Página principal do Drops de Física da UFCG"/>
                    <link rel="canonical" href="/"></link>
                </Helmet>
                <Header/>
                <AboutDrops></AboutDrops>
                <Projects/>
                <Activities/>
                <Group/>
                <Contact/>
                <Footer/>
            </Container>
        </Provider.Provider>
    )
}

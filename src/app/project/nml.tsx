import { Helmet } from "react-helmet";
import { Container } from "./style";

export default function ProjectNML() {
    return (
        <Container>
            <Helmet>
                <title>Drops na Rede | No Mundo da Lua</title>
                <meta name="Drops na Rede | No Mundo da Lua" content="Aprenda de forma incrivel sobre os planetas do nosso sistema solar."/>
                <link rel="canonical" href="/nml"></link>
            </Helmet>
            <iframe src="https://dropsnomundodalua.netlify.app" width="100%" height="100%"></iframe>
        </Container>
    )
}

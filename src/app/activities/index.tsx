import { useState } from "react";
import Nav from "../home/nav";
import { Activity, ActivityContainer, BottomBar, Container, NavBarVertical, Introduction, PdfEmbed } from "./activitiesStyle";
import { data } from "./data";
import { ActivityInterface } from "./activityInterface";
import { Helmet } from "react-helmet";

export default function Activities() {
    const [activity, setActivity] = useState<ActivityInterface>();

    return (
       <Container>
            <Helmet>
                <title>Drops na Rede | Atividades</title>
                <meta name="Drops na Rede | Atividades" content="Acesse todas as nossas atidades interativas."/>
                <link rel="canonical" href="/activities"></link>
            </Helmet>
            <ActivityContainer>
                <NavBarVertical>
                    {data.map((props, index) => 
                        <BottomBar 
                        index={index} 
                        onClick={() => setActivity(props)}
                        >{props.name}</BottomBar>
                    )}
                </NavBarVertical>
                {(activity == undefined)?
                <Introduction></Introduction>:
                 <Activity>
                    <PdfEmbed src={activity.pdf} type="application/pdf"/>
                 </Activity>
                }
            </ActivityContainer>
       </Container>
    )
}

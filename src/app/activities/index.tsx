import { useState } from "react";
import Nav from "../home/nav";
import { Activity, ActivityContainer, BottomBar, Container, NavBarVertical, Introduction, PdfEmbed } from "./activitiesStyle";
import { data } from "./data";
import { ActivityInterface } from "./activityInterface";

export default function Activities() {
    const [activity, setActivity] = useState<ActivityInterface>();

    return (
       <Container>
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
                    <PdfEmbed src={activity.pdf} type="application/pdf" />
                 </Activity>
                }
            </ActivityContainer>
       </Container>
    )
}

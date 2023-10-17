import { useState } from "react";
import Nav from "../home/nav";
import { Activity, ActivityContainer, BottomBar, Container, NavBarVertical, Introduction, PdfEmbed, AtividadesTextContainer, AtividadeText, ActivityContainerMobile, LineContainer, TextButton, DownloadButton } from "./activitiesStyle";
import { data } from "./data";
import { ActivityInterface } from "./activityInterface";
import { Helmet } from "react-helmet";
import IntroductionBase from "./introductionBase";

export default function Activities() {
    const [activity, setActivity] = useState<ActivityInterface>();

    const handleDownload = (pdfUrl: any, title: string) => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = title + ".pdf";
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return (
       <Container>
            <Helmet>
                <title>Drops na Rede | Atividades</title>
                <meta name="Drops na Rede | Atividades" content="Acesse todas as nossas atidades interativas."/>
                <link rel="canonical" href="/activities"></link>
            </Helmet>
            <ActivityContainer>
                <NavBarVertical>
                    <AtividadesTextContainer>
                        <AtividadeText>ATIVIDADES</AtividadeText>
                    </AtividadesTextContainer>
                    {data.map((props, index) => 
                        <BottomBar 
                        index={index} 
                        onClick={() => setActivity(props)}
                        >{props.name}</BottomBar>
                    )}
                </NavBarVertical>
                {(activity == undefined)?
                <Introduction>
                    <IntroductionBase></IntroductionBase>
                </Introduction>:
                 <Activity>
                    <PdfEmbed src={activity.pdf} type="application/pdf"/>
                 </Activity>
                }
            </ActivityContainer>
            <ActivityContainerMobile>
                <AtividadesTextContainer>
                    <AtividadeText>ATIVIDADES</AtividadeText>
                </AtividadesTextContainer>
                {data.map((props, index) => 
                    <LineContainer>
                        <TextButton>{props.name}</TextButton>
                        <DownloadButton onClick={() => handleDownload(props.pdf, props.name)}>BAIXAR</DownloadButton>  
                    </LineContainer>
                )}
            </ActivityContainerMobile>
       </Container>
    )
}


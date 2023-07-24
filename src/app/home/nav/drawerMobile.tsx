import { DrawerContainer, DrawerContent, ButtonClose, ButtonContainer, ButtonNavigation, ContainerDrawer, ImageButtonClose, TextButtonDrawer } from "./navStyleMobile";
import buttonCloseImage from "../../assets/buttonDrawer.png";

export default function DrawerMobile(props: any) {

    const eventScroll = () => {
        props.toggleDrawer();
    }

    return (
        <DrawerContainer isOpen={props.isDrawerOpen}>
            <DrawerContent>
                <ContainerDrawer>
                    <ButtonContainer>
                        <ButtonClose onClick={props.toggleDrawer}>
                            <ImageButtonClose src={buttonCloseImage}/>
                        </ButtonClose>                        
                    </ButtonContainer>
                    <ButtonContainer>
                        <ButtonNavigation onClick={() => props.redirect("/")}>
                            <TextButtonDrawer>Pagina Inicial</TextButtonDrawer>
                        </ButtonNavigation>
                    </ButtonContainer>
                    <ButtonContainer>
                        <ButtonNavigation onClick={() => props.navigateTo("https://dropsnomundodalua.netlify.app")}>
                            <TextButtonDrawer>Mundo da Lua</TextButtonDrawer>
                        </ButtonNavigation>
                    </ButtonContainer>
                    <ButtonContainer>
                        <ButtonNavigation onClick={() => props.navigateTo("https://drops-coronadrops.web.app")}>
                            <TextButtonDrawer>Corona Drops</TextButtonDrawer>
                        </ButtonNavigation>
                    </ButtonContainer>
                    <ButtonContainer onClick={() => eventScroll()}>
                        <ButtonNavigation>
                            <TextButtonDrawer>Contato</TextButtonDrawer>
                        </ButtonNavigation>
                    </ButtonContainer>
                </ContainerDrawer>
            </DrawerContent>
      </DrawerContainer>
    )
}

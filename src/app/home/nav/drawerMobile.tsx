import { 
    DrawerContainer, 
    DrawerContent, 
    ButtonClose, 
    ButtonContainer, 
    ButtonNavigation, 
    ContainerDrawer, 
    ImageButtonClose, 
    TextButtonDrawer 
} from "./navStyleMobile";
import buttonCloseImage from "../../assets/buttonDrawer.png";

export default function DrawerMobile(props: any) {

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
                            <TextButtonDrawer>Drops na Rede</TextButtonDrawer>
                        </ButtonNavigation>
                    </ButtonContainer>
                    <ButtonContainer>
                        <ButtonNavigation onClick={() => props.redirect("/nml")}>
                            <TextButtonDrawer>Mundo da Lua</TextButtonDrawer>
                        </ButtonNavigation>
                    </ButtonContainer>
                    <ButtonContainer>
                        <ButtonNavigation onClick={() => props.navigateTo("/coronadrops")}>
                            <TextButtonDrawer>Corona Drops</TextButtonDrawer>
                        </ButtonNavigation>
                    </ButtonContainer>
                    <ButtonContainer>
                        <ButtonNavigation onClick={() => props.redirect("/schools")}>
                            <TextButtonDrawer>Drops nas Escolas</TextButtonDrawer>
                        </ButtonNavigation>
                    </ButtonContainer>
                    <ButtonContainer>
                        <ButtonNavigation onClick={() => props.redirect("/activities")}>
                            <TextButtonDrawer>Atividades</TextButtonDrawer>
                        </ButtonNavigation>
                    </ButtonContainer>
                </ContainerDrawer>
            </DrawerContent>
      </DrawerContainer>
    )
}

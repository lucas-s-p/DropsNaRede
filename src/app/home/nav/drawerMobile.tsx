import { 
    DrawerContainer, 
    DrawerContent, 
    ButtonClose, 
    ButtonContainer, 
    ButtonNavigation, 
    ContainerDrawer, 
    ImageButtonClose, 
    TextButtonDrawer, 
    DropsMenu,
    Division
} from "./navStyleMobile";
import buttonCloseImage from "../../assets/buttonDrawer.png";

export default function DrawerMobile(props: any) {

    return (
        <DrawerContainer isOpen={props.isDrawerOpen}>
            <DrawerContent>
                <ContainerDrawer>
                    <ButtonContainer>
                        <DropsMenu>Menús</DropsMenu>
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
                        <ButtonNavigation onClick={() => props.redirect("/coronadrops")}>
                            <TextButtonDrawer>Corona Drops</TextButtonDrawer>
                        </ButtonNavigation>
                    </ButtonContainer>
                    <ButtonContainer>
                        <ButtonNavigation onClick={() => props.redirect("/schools")}>
                            <TextButtonDrawer>Drops nas Escolas</TextButtonDrawer>
                        </ButtonNavigation>
                    </ButtonContainer>
                    <ButtonContainer>
                        <ButtonNavigation onClick={() => props.redirect("/curiosities")}>
                            <TextButtonDrawer>Curiosidades</TextButtonDrawer>
                        </ButtonNavigation>
                    </ButtonContainer>
                    <Division/>
                    <ButtonContainer>
                        <DropsMenu>Conheça</DropsMenu>  
                    </ButtonContainer>
                    <ButtonContainer>
                        <ButtonNavigation onClick={() => props.redirect("/bingotelescope")}>
                            <TextButtonDrawer>Bingo</TextButtonDrawer>
                        </ButtonNavigation>
                    </ButtonContainer>
                    <ButtonContainer>
                        <ButtonNavigation onClick={() => props.redirect("/NASAEyes")}>
                            <TextButtonDrawer>Nasa Eyes</TextButtonDrawer>
                        </ButtonNavigation>
                    </ButtonContainer>
                    <ButtonContainer>
                        <ButtonNavigation onClick={() => props.redirect("/SkyMaps")}>
                            <TextButtonDrawer>Sky Maps</TextButtonDrawer>
                        </ButtonNavigation>
                    </ButtonContainer>
                </ContainerDrawer>
            </DrawerContent>
      </DrawerContainer>
    )
}

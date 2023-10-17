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
                        <DropsMenu>Menu</DropsMenu>
                        <ButtonClose onClick={props.toggleDrawer}>
                            <ImageButtonClose src={buttonCloseImage}/>
                        </ButtonClose>                        
                    </ButtonContainer>
                    <ButtonContainer>
                        <ButtonNavigation onClick={() => props.redirect("/")}>
                            <TextButtonDrawer>PÁGINA INICIAL</TextButtonDrawer>
                        </ButtonNavigation>
                    </ButtonContainer>
                    <ButtonContainer>
                        <ButtonNavigation onClick={() => props.redirect("/nml")}>
                            <TextButtonDrawer>MUNDO DA LUA</TextButtonDrawer>
                        </ButtonNavigation>
                    </ButtonContainer>
                    <ButtonContainer>
                        <ButtonNavigation onClick={() => props.redirect("/coronadrops")}>
                            <TextButtonDrawer>CORONA DROPS</TextButtonDrawer>
                        </ButtonNavigation>
                    </ButtonContainer>
                    <ButtonContainer>
                        <ButtonNavigation onClick={() => props.redirect("/dropsoretorno")}>
                            <TextButtonDrawer>DROPS - O RETORNO</TextButtonDrawer>
                        </ButtonNavigation>
                    </ButtonContainer>
                    <ButtonContainer>
                        <ButtonNavigation onClick={() => props.redirect("/schools")}>
                            <TextButtonDrawer>DROPS NAS ESCOLAS</TextButtonDrawer>
                        </ButtonNavigation>
                    </ButtonContainer>
                    <ButtonContainer>
                        <ButtonNavigation onClick={() => props.redirect("/curiosities")}>
                            <TextButtonDrawer>CURIOSIDADES</TextButtonDrawer>
                        </ButtonNavigation>
                    </ButtonContainer>
                    <ButtonContainer>
                        <ButtonNavigation onClick={() => props.redirect("/activities")}>
                            <TextButtonDrawer>ATIVIDADES</TextButtonDrawer>
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
                            <TextButtonDrawer>Nasa`s Eyes</TextButtonDrawer>
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

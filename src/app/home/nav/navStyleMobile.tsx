import styled from "styled-components";

interface DrawerContainerProps {
    isOpen: boolean;
}

export const DrawerContainer = styled.div<DrawerContainerProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    background-color: white;
    box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.2);
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s ease-in-out;
    z-index: 2;
`;

export const DrawerContent = styled.div`
    padding: 10px;
`;

export const ContainerDrawer = styled.div`
    width: 230px;
    height: calc(100vh - 20px);
`

export const ButtonContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    margin-top: 4px;
`

export const ButtonClose = styled.button`
    width: 40px;
    height: 40px;
    position: absolute;
    right: 10px;
    border: none;
    cursor: pointer;
    background-color: white;
`

export const ImageButtonClose = styled.img`
    width: 30px;
    height: 30px;
`

export const ButtonNavigation = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid #3498db; /* Cor da borda */
  background-color: #3498db; /* Cor de fundo */
  color: #fff; /* Cor do texto */
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #2980b9; /* Cor de fundo ao passar o mouse */
  }
`;

export const TextButtonDrawer = styled.span`
  font-size: 1.2rem;
  /* Pode adicionar mais estilos de texto, como cor e tamanho de fonte, aqui */
`;

export const ModalButton = styled.button`
    width: 50px;
    height: 50px;
    border: 0px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    background-color: white;
`

export const ModalButtonImage = styled.img`
    width: 70%;
    height: 70%;
    border: 0px;
    object-fit: contain;
    background-color: white;
    cursor: pointer;

    &: hover {
        opacity: 0.5;
    }
`

export const DropsMenu = styled.text`
    font-size: 1.2rem;
`

export const Division = styled.div`
    margin-top: 20px;
`

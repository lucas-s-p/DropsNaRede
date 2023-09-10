import React from 'react';
import styled from 'styled-components';
import { BottomText, Image, SquareContainer, TextOverlay } from './othersStyles';

interface SquareProps {
  image: string;
  textAbout: string;
  title: String;
}

const Square: React.FC<SquareProps> = ({ image, textAbout, title}) => {
  const handleMouseEnter = () => {
    imageRef.current!.style.opacity = '0.7';
    textOverlayRef.current!.style.opacity = '1';
  };

  const handleMouseLeave = () => {
    imageRef.current!.style.opacity = '1';
    textOverlayRef.current!.style.opacity = '0';
  };

  const imageRef = React.createRef<HTMLImageElement>();
  const textOverlayRef = React.createRef<HTMLDivElement>();

  return (
    <SquareContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Image ref={imageRef} src={image}/>
        <BottomText>{title}</BottomText>
        <TextOverlay ref={textOverlayRef}>{textAbout}</TextOverlay>
    </SquareContainer>
  );
};

export default Square;

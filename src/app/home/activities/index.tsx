import styled, { keyframes } from "styled-components"
import { text } from "./data"
import React from "react";

function formatTextWithLineBreaks(text:string) {
    return text.split('\n').map((item, key) => {
      return <React.Fragment key={key}>{item}<br /></React.Fragment>;
    });
  }
  
  export default function Activities() { 
      return (
          <Container>
              <TitleContainer>
                  <Title>NOSSAS ATIVIDADES</Title>
              </TitleContainer>
              <Paragraph>
                  {formatTextWithLineBreaks(text)}
              </Paragraph>
          </Container>
      )
  }
  
  const colorChange2x = keyframes`
  0% {
    background: #50246c;
  }
  100% {
    background: #000053;
  }
`;

const Container = styled.div`
    width: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-vertical: 20px;
    animation: ${colorChange2x} 10s linear infinite alternate both;
    `


const TitleContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = styled.text`
    margin-top: 20px;
    font-size: 2rem;
    font-weight: 500;
    color: white;
`

const Paragraph = styled.text`
    margin-top: 60px;
    margin-bottom: 80px;
    font-size: 1.4rem;
    color: white;
    width: 90%;
    white-space: wrap;
    text-align: flex-start;
    
    @media (max-width: 450px) {
        font-size: 1rem;
    }
`

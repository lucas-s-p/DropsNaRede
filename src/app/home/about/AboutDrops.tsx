import styled, { keyframes } from "styled-components"
import React from "react";


export const text: string = "O DROPS de Física surgiu como uma iniciativa dos recém-formados do curso de Física em 2016. Durante o nosso tempo na universidade, percebemos que tínhamos poucas oportunidades de interação prática em nossas aulas, especialmente com a professora do nosso departamento. \n\nO propósito deste projeto é promover uma interação direta entre os alunos e o mundo material por meio de pequenas intervenções. Essas intervenções são conduzidas por um grupo de licenciandos, e o professor não interfere nas atividades experimentais, a menos que escolha fazê-lo, seja criando uma sequência de experimentos anterior ou posterior à nossa atividade."

function formatTextWithLineBreaks(text:string) {
    return text.split('\n').map((item, key) => {
      return <React.Fragment key={key}>{item}<br /></React.Fragment>;
    });
  }
  
  export default function AboutDrops() { 
      return (
          <Container>
              <TitleContainer>
                  <Title>O QUE É O DROPS?</Title>
              </TitleContainer>
              <Paragraph>
                  {formatTextWithLineBreaks(text)}
              </Paragraph>
          </Container>
      )
  }

const Container = styled.div`
    width: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-vertical: 20px;
    background-color: #50246c;    `


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

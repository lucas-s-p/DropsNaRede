import styled, { keyframes } from "styled-components";
import drops from './drops.png';

export default function IntroductionBase() {
    return (
        <Container>
            <ScaleDownCenter></ScaleDownCenter>
        </Container>
    )
}

const bgPanningLeft = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Container = styled.div`
  animation: ${bgPanningLeft} 5s linear;
  background-image: linear-gradient(-90deg, white, #60f086);
  background-size: 200% 100%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const scaleDownCenterKeyframes = keyframes`
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  100% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
`;

// Create a styled component with the animation
const ScaleDownCenter = styled.div`
  -webkit-animation: ${scaleDownCenterKeyframes} 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: ${scaleDownCenterKeyframes} 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  width: 400px;
  height: 400px;
  background: url(${drops});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

const textPopUpBottomKeyframes = keyframes`
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
  }
`;

// Create a styled component with the animation
const Text = styled.div`
  -webkit-animation: ${textPopUpBottomKeyframes} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: ${textPopUpBottomKeyframes} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  font-size: 2rem;
`;
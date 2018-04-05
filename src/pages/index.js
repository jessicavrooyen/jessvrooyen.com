import React from 'react';
import styled, { keyframes } from 'styled-components';

const opacityAnim = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;
const squareBeforeAnim = keyframes`
  0% {
    opacity: 0;
    ${'' /* transform: scaleX(0); */}
  }

  100% {
    opacity: 1;
    ${'' /* transform: scaleX(1); */}
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(0);
  }
`;


const Title = styled.h1`
  font-family: "utopia-std", serif;
  font-weight: 700;
  font-size: 72px;
  line-height: 1;
  margin-bottom: 16px;
  color: black;
  transform: translateY(100%);
  animation: ${slideUp} 1.4s cubic-bezier(.54,.09,.11,1) forwards;
  animation-delay: 1s;
`;

const Text = styled.p`
  line-height: 1.5;
  font-family: europa;
  font-weight: 400;
  color: #666;
  font-size: 16px;
  margin-bottom: 24px;
  transform: translateY(100%);
  animation: ${slideUp} 1.35s cubic-bezier(.5,0,0,1) forwards;
  animation-delay: 1.2s;
`;

const squareAfterAnim = keyframes`
  0% {
    transform: translateX(-100%) scaleX(3);
    opacity: 1;
  }

  90% {
    transform: translateX(250%) scaleX(1);
    opacity: 1;
  }

  91% {
    transform: translateX(300%) scaleX(1);
    opacity: 0;
  }

  100% {
    transform: translateX(300%) scaleX(1);
    opacity: 0;
  }
`;

const IndexWrapper = styled.div`
  padding: 0 2rem;
  margin-top: 96px;
  margin-bottom: 96px;
  max-width: 600px;
  padding: 0 2rem;
  position: relative;
  opacity: 0;
  animation: ${opacityAnim} .4s .15s ease-in-out forwards;

  &:before {
    content: '';
    position: absolute;
    top: -20%;
    z-index: -1;
    left: calc(55%);
    width: 150%;
    height: 150%;
    background-color: #f9fbfc;
    opacity: 0;
    animation: ${squareBeforeAnim} .75s 1.75s ease-in forwards;
  }

  &:after {
    content: '';
    position: absolute;
    top: -20%;
    z-index: 1;
    left: 0;
    width: 150%;
    height: 150%;
    background-color: #fff;
    transform: translateX(-100%) scaleX(3);
    animation: ${squareAfterAnim} 4.5s .15s cubic-bezier(.54,.09,.11,1) forwards;
  }
`;

const IndexPage = () => (
  <IndexWrapper>
    <Title>Hello, Im Jess.</Title>
      <Text> 
        Freelance Front-End Web Designer and Developer.
        Creator of super fast, really tasty, and superbly functional websites.
      </Text>
  </IndexWrapper>
);

export default IndexPage;

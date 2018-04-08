import React from 'react';
import styled, { keyframes } from 'styled-components';

const TextIn = keyframes`
  0% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(0);
  }
`;

const ButtonContainer = styled.div`
    border-bottom: 1px solid #03E0F2;
    width: 260px;
    cursor: pointer;

    .shape {
        fill: transparent;
        stroke-dasharray: 390;
        stroke-dashoffset: -310;
    }

    @keyframes draw {
        0% {
    stroke-dasharray: 140 540;
    stroke-dashoffset: -474;
    stroke-width: 1px;
    stroke: #03E0F2;
    fill: transparent;
        }
        
        50% {
            fill: transparent;
        }
        
        75% {
            fill: transparent;
        }

        100% {
            stroke-dasharray: 760;
            stroke-dashoffset: 0;
            stroke-width: 2px;
            stroke: #03E0F2;
            fill: #03E0F2;
        }
        }
    }

    &:hover .shape  {
        -webkit-animation: 1s draw linear forwards;
        animation: 0.5s draw linear forwards;
    }

    text {
        animation: ${TextIn} 1.10s cubic-bezier(.5,0,0,1) forwards;
        animation-delay: 2s;
        transform: translateY(100%);

        &:hover {
            fill: #fff;
            transition: .4s all ease-in;
        }
    }

`;

const ButtonCTA = () => (
  <ButtonContainer>
    <svg height="60" width="260" xmlns="http://www.w3.org/2000/svg">
      <rect className="shape" height="60" width="260" />
      <text x="78" y="35" fontFamily="Roboto Condensed" fontSize="20" fill="#555">Get in Touch</text>
    </svg>
  </ButtonContainer>

);

export default ButtonCTA;

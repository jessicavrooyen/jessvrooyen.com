import React from 'react';
import styled from 'styled-components';

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

    &:hover .shape {
        -webkit-animation: 1s draw linear forwards;
  animation: 0.5s draw linear forwards;
    }
`


const Button = () => (
    <ButtonContainer>
    <svg height="60" width="260" xmlns="http://www.w3.org/2000/svg">
        <rect class="shape" height="60" width="260" />
    </svg>
    <text>Get in Touch</text>
    </ButtonContainer>

);

export default Button;
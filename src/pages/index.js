import React from 'react';
import Link from 'gatsby-link';
import styled, { keyframes } from 'styled-components';
import { media } from '../styles/variables';

import { StyledHeading as Title } from '../styles/shared';

import ButtonCTA from '../components/Buttons/CTA';

const AnimateOpacity = keyframes`
  0% {
    opacity: 0;
}
  100% {
    opacity: 1;
  }
`;
// const BlockBefore = keyframes`
//   0% {
//     opacity: 0;
//   }

//   100% {
//     opacity: 1;
//   }
// `;


const TextIn = keyframes`
  0% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(0);
  }
`;


const StyledHeading = Title.extend`
  transform: translateY(100%);
  animation: ${TextIn} .7s cubic-bezier(.54,.09,.11,1) forwards;
  animation-delay: 1s;
  
  ${media.sm`
  font-size: 4rem;
  `}
`;

const Text = styled.p`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 300;
  color: #444;
  margin-bottom: 24px;
  transform: translateY(100%);
  animation: ${TextIn} 1.10s cubic-bezier(.5,0,0,1) forwards;
  animation-delay: 1.2s;
`;

// const BlockAfter = keyframes`
//   0% {
//     transform: translateX(-100%) scaleX(3);
//     opacity: 1;
//   }

//   90% {
//     transform: translateX(250%) scaleX(1);
//     opacity: 1;
//   }

//   95% {
//     transform: translateX(300%) scaleX(1);
//     opacity: 0;
//   }

//   100% {
//     transform: translateX(300%) scaleX(1);
//     opacity: 0;
//   }
// `;
const IndexWrapper = styled.div`
  padding: 0 2rem;
  margin-top: 96px;
  margin-bottom: 96px;
  max-width: 600px;
  position: relative;
  opacity: 0;
  animation: ${AnimateOpacity} .4s .15s ease-in-out forwards;

  ${'' /* &:before {
    content: '';
    position: absolute;
    top: -20%;
    z-index: -1;
    left: 50%;
    width: 54%;
    height: 150%;
    background-color: #94ecf8;
    opacity: 0;
    animation: ${BlockBefore} .75s 1.75s ease-in forwards;

    ${media.sm`
    left: calc(59%);
    width: 46%;
    `}
    }
  } */}

  ${'' /* &:after {
    content: '';
    position: absolute;
    top: -20%;
    z-index: 1;
    left: 0;
    width: 0%;
    height: 150%;
    background-color: #fff;
    transform: translateX(-100%) scaleX(3)
    animation: ${BlockAfter} 4.5s .15s cubic-bezier(.54,.09,.11,1) forwards;
  } */}

  
`;

const IndexPage = () => (
  <IndexWrapper>
    <StyledHeading>Hello, Im Jess.</StyledHeading>
    <Text>
        Freelance Front-End Web Designer and Developer.
        Creator of super fast, really tasty, and superbly functional websites.
    </Text>
    <Link to="/contact/">
      <ButtonCTA />
    </Link>
  </IndexWrapper>
);

export default IndexPage;

import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'gatsby-link';
import { colors, media, getOuterSpace } from '../../styles/variables';

const LandingWrapper = styled.div`
    max-width: 36rem;
    ${media.md`
    max-width: 32rem;
  `}
  ${media.sm`
    max-width: 100%;
  `}
  ${media.xs`

  `}

  ${props => (props.fixed
    ? css`
      ${getOuterSpace('padding')};
      position: absolute;
      top: 0;
      right: 0;
      text-align: right;
      ${media.md`
        text-align: left;
        left: 0;
        right: auto;
      `}
    `
    : css`
      text-align: left;
    `)
}
`;
const Title = styled.h1`
    font-size: 1rem;
    font-weight: 300;
  span {
    color: ${colors.yellow500};
    text-decoration: line-through;
  }
`;

const LandingPage = props => (
  <LandingWrapper {...props}>
    <Title>
      Hello, Im Jess.
      Freelance Front-End Web Designer and Developer.
      Creator of super fast, really tasty, and superbly functional websites.
      <button>
        <Link to="/contact/">Available for hire</Link>
      </button>
    </Title>
  </LandingWrapper>
);

export default LandingPage;


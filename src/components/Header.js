import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import logo from '../images/logo.svg';
import { Container as Content } from '../styles/shared';

const HeaderWrapper = styled.div`
    margin-bottom: 1.45rem;
    padding: 1.45rem 1.0875rem;
    
    h1 {
      margin: 0;
      img {
        height: 50px;
        image-rendering: -moz-crisp-edges;
        image-rendering: -o-crisp-edges;
        image-rendering: -webkit-optimize-contrast;
        -ms-interpolation-mode: nearest-neighbor;
      }
    }
`;

const Container = Content.extend`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;


const StyledLink = styled(Link)`
  font-size: 0.9em;
  padding: 15px 10px 18px;
  text-transform: uppercase;
  letter-spacing: .1em;
  display: block;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    li {
      margin: 0;
    }
  }
`;

const Header = ({ name }) => (
  <HeaderWrapper>
    <Container>
      <h1>
        <Link to="/">
          <img src={logo} alt={name} />
        </Link>
      </h1>
      <Nav>
        <ul>
          <li><StyledLink to="/about">About</StyledLink></li>
          <li><StyledLink to="/portfolio">Portfolio</StyledLink></li>
          <li><StyledLink to="/contact">Contact</StyledLink></li>
        </ul>
      </Nav>
    </Container>
  </HeaderWrapper>
);

export default Header;

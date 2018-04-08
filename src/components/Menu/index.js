import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'gatsby-link';
import { Container as MenuContainer } from '../../styles/shared';
import { media } from '../../styles/variables';

const Container = MenuContainer.extend`
    width: 100%;
`;

const MenuWrapper = styled.nav`
  width: 100%;
  display: flex;
  text-align: right;
  justify-content: space-between;
  pointer-events: none;
  
  ul:last-child li {
    text-align: right;
    margin-bottom: .5em;

    a {
      transition: color .3s ease;
      will-change: color;
      position: relative;
      
      &::before {
        border-radius: 100%;
        content: '';
        display: block;
        transition: transform .3s cubic-bezier(.45, 0, .1, 1), opacity .1s ease;
        will-change: transform, opacity;
      }

      &:not(.active)::before {
        opacity: 0;
        transform: translate(-1rem, -50%);
      }

      &:hover {
        color: #03E0F2;
        
        &::before {
          transform: translate(0, -50%);
          opacity: 1;
        }
      }
    }
  }
  
  ${media.md`
    position: static;
    padding: 0;

  `}
`;

const Nav = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  

  ${media.md`
    display: block;
    padding: 0;
  `}
`;

const NavItems = styled.li` 
    padding: .5rem;
    ${media.md`
    &:after {
          content: "";
          border-bottom: 1px solid #03E0F2;
          width: 0;
          left: 0;
          transition: width 1s ease;
          position: absolute;
        }
        &:hover, {
          border-bottom: 1px solid #03E0F2;
        }
        &:hover:after {
          width: 100%;
        }
    `}
  a {
    font-size: .9rem;
    font-family: 'Roboto Condensed', sans-serif;
    text-transform: uppercase;
    pointer-events: all;
    transition: color .1s ease;
    ${props => (props.highlight ? css`
        color: #03e0f2;
        
        &:hover::before {
          display: none !important;
        }
      `
    : css`
        color: #23222a;
      `)}
    ${media.md`
        color: white;
        font-size: 1rem;
        font-weight: 400;
        padding: .4rem 0 0 0;
        text-align: center;
    `}
  }
`;

const StyledLink = styled(Link).attrs({ activeClassName: 'active' })`
    display: block;
    &.active {
        color: #03e0f2;
        
        &::before {
            transform: translate(0, -50%);
            opacity: 1;
            
        }
    }
`;

const Menu = () => (
  <MenuWrapper>
    <Container>
      <Nav>
        <NavItems>
          <StyledLink exact to="/">Index</StyledLink>
        </NavItems>
        {/* <NavItems>
          <StyledLink exact to="/about/">About</StyledLink>
        </NavItems> */}
        <NavItems>
          <StyledLink exact to="/portfolio/">Portfolio</StyledLink>
        </NavItems>
        <NavItems>
          <StyledLink exact to="/contact/">Contact</StyledLink>
        </NavItems>
      </Nav>
    </Container>
  </MenuWrapper>
);

export default Menu;

import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'gatsby-link';
import { colors, media } from '../../styles/variables';

const MenuWrapper = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;
  background-color: #fff;
  
  ul:last-child li {
    text-align: right;
    
    a {
      transition: color .4s ease;
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
  ${'' /* padding: 0; */}
  ${'' /* margin: 0; */}
  width: 100%;
  display: flex;
  
`;

const NavItems = styled.li` 
    padding: .5rem;

    &:last-child {
      padding-right: 0;
    }

  a {
    font-size: .9rem;
    font-family: 'Fira Sans', sans-serif;
    pointer-events: all;
    transition: color .1s ease;
    font-weight: 300;
    ${props => (props.highlight ? css`
        color: ${colors.blue900};
        
        &:hover::before {
          display: none !important;
        }
      `
      : css`
        color: ${colors.gray500};
      `)}
  }
`;

const NavLink = styled(Link).attrs({ activeClassName: 'active' })`
    display: block;
    &.active {
        color: ${colors.blue900};    

        &::before {
            transform: translate(0, -50%);
            opacity: 1;
        }
    }
`;

const Menu = () => (
  <MenuWrapper>
    {/* <Nav>
      <NavItems>
        <a href="" rel="noopener noreferrer" target="_blank">Twitter</a>
      </NavItems>
      <NavItems>
        <a href="" rel="noopener noreferrer" target="_blank">Github</a>
      </NavItems>
      <NavItems>
        <a href="" rel="noopener noreferrer" target="_blank">LinkedIn</a>
      </NavItems>
    </Nav> */}
    <Nav>
      <NavItems>
        <NavLink exact to="/">Index</NavLink>
      </NavItems>
      <NavItems>
        <NavLink exact to="/about/">About</NavLink>
      </NavItems>
      <NavItems>
        <NavLink exact to="/portfolio/">Portfolio</NavLink>
      </NavItems>
      <NavItems>
        <NavLink exact to="/contact/">Contact</NavLink>
      </NavItems>
    </Nav>
  </MenuWrapper>
);

export default Menu;

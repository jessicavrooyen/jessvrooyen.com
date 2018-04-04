import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'gatsby-link';
import { colors, fonts, media, getOuterSpace } from '../../styles/variables';

const MenuWrapper = styled.nav`

  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  pointer-events: none;
  ${getOuterSpace('padding')};
  
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
        height: .3rem;
        width: .3rem;
        transition: transform .3s cubic-bezier(.45, 0, .1, 1), opacity .1s ease;
        will-change: transform, opacity;
      }

      &:not(.active)::before {
        opacity: 0;
        transform: translate(-1rem, -50%);
      }

      &:hover {
        color: #fff;
        
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
  padding: 0;
  margin: 0;
  width: 50%;
  max-width: 14rem;
`;

const NavItems = styled.li` 
    list-style: none;
    padding: .5rem 0;
    line-height: 1em;
  
  &:last-child {
    padding-bottom: 0;
  }

  a {
    font-size: .9rem;
    font-family: ${fonts.mono};
    pointer-events: all;
    transition: color .1s ease;
    line-height: 1em;
    ${props => (props.highlight 
      ? css`
        color: ${colors.yellow500};
        
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
    &.active {
        color: #333;    

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

import React from 'react';
import styled, { css } from 'styled-components';
import { media } from '../../styles/variables';

const MenuWrapper = styled.div`
  display: none;
  margin-bottom: .9em;
  height: 17px;
  width: 1.75rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  backface-visibility: hidden;
  transition: transform .30s cubic-bezier(.45, 0, .07, 1);
  will-change: transform;
  cursor: pointer;
  span {
    display: inline-block;
    height: 2px;
    background: #03E0F2;
    
  }

  ${props => (props.open
    ? css`
      transform: rotate(90deg);
      align-items: center;
      
      span {
        &:nth-child(1), &:nth-child(3) {
          width: 60%;
        }
        
        &:nth-child(2) {
          width: 100%;
        }
      }
    `
    : css`
      transform: rotate(0);
      
      span {
        &:nth-child(1) {
          width: 100%;
        }
        
        &:nth-child(2) {
          width: 60%;
        }
        
        &:nth-child(3) {
          width: 80%;
        }
      }
    `)}
  
  ${media.md`
    display: flex;
  `}
`;

const ToggleNav = props => (
  <MenuWrapper {...props}>
    <span />
    <span />
    <span />
  </MenuWrapper>
);

export default ToggleNav;

import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Link from 'gatsby-link';

import ToggleNav from '../ToggleNav';
import Menu from '../Menu';
import { Container as Content } from '../../styles/shared';
import { media } from '../../styles/variables';

import Logo from '../Logo';

const HeaderWrapper = styled.div`
    margin-bottom: 1.45rem;
    padding: 0;
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
    ${media.md`
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 2rem 1.0875rem;
    `}
`;

const NavWrapper = styled.div`
    ${media.md`
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      z-index: 10;
      background-color: #23222a;
    `}
`;

const MenuBar = styled.div`
    padding: .5rem;
    ${media.md`
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;
      
    `}
`;

const Container = Content.extend`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const ShowMenu = styled.div`
    ${media.md`
        overflow: hidden;
        transition: max-height .3s cubic-bezier(0.45, 0, .1, 1);
        will-change: max-height;
        width: 100%;
        
        ${props => (props.open ? css`
            max-height: 290px;
        `
    : css`
            max-height: 0;
        `)}

      `}
`;

class Header extends Component {
  constructor() {
    super();
    this.state = { open: false };
    this.toggleNav = this.toggleNav.bind(this);
  }
  componentDidUpdate(prevProps) {
    const { location } = this.props;

    if (location.pathname !== prevProps.location.pathname) {
      this.setState({ open: false });
    }
  }
  toggleNav() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { open } = this.state;
    return (
      <HeaderWrapper>
        <NavWrapper>
          <Container>
            <MenuBar>
              <h1>
                <Link to="/">
                  <Logo />
                </Link>
              </h1>
              <ToggleNav
                open={open}
                onClick={this.toggleNav}
              />
            </MenuBar>
            <ShowMenu open={open}>

              <Menu />

            </ShowMenu>

          </Container>
        </NavWrapper>
      </HeaderWrapper>
    );
  }
}

export default Header;

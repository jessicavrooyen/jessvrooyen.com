import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Link from 'gatsby-link';
import ToggleNav from '../components/ToggleNav';

// import Navigation from '../components/Navigation';
import Menu from '../components/Menu';
import { Container as Content } from '../styles/shared';
import { media } from '../styles/variables';

import Logo from '../components/Logo';

const HeaderWrapper = styled.div`
${media.md`
  display: flex;
  justify-content: space-between;
  width: 100%;
  
`}
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


// const StyledLink = styled(Link)`
//   font-size: 0.9em;
//   padding: 15px 10px 18px;
//   text-transform: uppercase;
//   letter-spacing: .1em;
//   display: block;
//   font-family: 'Fira Sans', sans-serif;
//   font-weight: 300;
// `;

// const Nav = styled.nav`
//   ul {
//     list-style: none;
//     display: flex;
//     li {
//       margin: 0;
//       transition: color .1s ease-in;

//          &:last-child {
//            padding-right: 0;
//          }
//     }
//     a {
//       padding: 1rem;
//     }
//   }
// `;
const Shoable = styled.div`
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
  //  componentDidUpdate(prevProps) {
  //    const { location } = this.props;

  //    if (location.pathname !== prevProps.location.pathname) {
  //      this.setState({ open: false });
  //    }
  //  }
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
            <Shoable open={open}>

              <Menu />

            </Shoable>

          </Container>
        </NavWrapper>
      </HeaderWrapper>
    );
  }
}

export default Header;

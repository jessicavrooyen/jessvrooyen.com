// import React, { Component } from 'react';
// import styled, { css } from 'styled-components';
// import Link from 'gatsby-link';
// import ToggleNav from '../ToggleNav';
// import Menu from '../Menu';
// import Footer from '../Footer';
// import { colors, media, getOuterSpace } from '../../styles/variables';

// import Logo from '../Logo';

// const NavWrapper = styled.div`
//     ${media.md`
//         position: fixed;
//         bottom: 0;
//         left: 0;
//         right: 0;
//         width: 100%;
//         z-index: 10;
//     `}
// `;

// const Header = styled.div`
//     ${media.md`
//         display: flex;
//         justify-content: space-between;
//         align-items: flex-end;
//         width: 100%;
//         min-height: 7rem;
//         background-image: linear-gradient(to bottom, rgba(30, 39, 51, 0.0) 0%, rgba(30, 39, 51, 1) 50%);

//         ${getOuterSpace('padding')};
//     `}
// `;

// const JVR = styled.div`
//         img {
//             height:60px;
//         }
//     }
// `;

// const Shoable = styled.div`
//     ${media.md`
//         background: ${colors.gray900};
//         overflow: hidden;
//         transition: max-height .6s cubic-bezier(0.45, 0, .1, 1);
//         will-change: max-height;
        
//         ${props => (props.open ? css`
//             max-height: 200px;
//         `
//     : css`
//             max-height: 0;
//         `)}

//         > div {
//             padding: 0 3rem 3rem;
//         }
//     `}

//     ${media.sm`
//         > div {
//             padding: 0 2rem 2rem;
//         }
        
//     `}
// `;


// class Navigation extends Component {
//   constructor() {
//     super();
//     this.state = { open: false };
//     this.toggleNav = this.toggleNav.bind(this);
//   }

//   componentDidUpdate(prevProps) {
//     const { location } = this.props;

//     if (location.pathname !== prevProps.location.pathname) {
//       this.setState({ open: false });
//     }
//   }

//   toggleNav() {
//     this.setState({ open: !this.state.open });
//   }


//   render() {
//     const { open } = this.state;
//     return (
//       <NavWrapper>
//         <Header>
//           <JVR>
//             <h1>
//               <Link to="/">
//                 <Logo />
//               </Link>
//             </h1>
//           </JVR>
//           <ToggleNav
//             open={open}
//             onClick={this.toggleNav}
//           />
//         </Header>
//         <Shoable open={open}>
//           <div>
//             <Menu />

//           </div>
//         </Shoable>
//       </NavWrapper>
//     );
//   }
// }

// export default Navigation;

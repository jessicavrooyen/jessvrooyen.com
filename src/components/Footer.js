import React from 'react';
import styled from 'styled-components';

import { Container as FooterContainer } from '../styles/shared';

const Container = FooterContainer.extend`
    color: #333;
    padding: 0 1.0875;
    text-align: center;
`;

const Footer = () => (
  <Container>
   Jessica Van Rooyen. <span role="img" aria-label="img">&copy;</span> 2018. Made with <span role="img" aria-label="img">☕</span> in South Africa
  </Container>
);

export default Footer;

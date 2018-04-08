import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import favicon from './favicon.ico';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container as BaseContainer } from '../styles/shared';
import '../styles/globals';


const Container = BaseContainer.extend`
  padding-top: 0;
  
`;
export default ({ children, location }) => (
  <div>
    <Helmet
      title="Jessica Van Rooyen | Portfolio"
      meta={[
            { name: 'description', content: 'Front-End Portfolio Website of Jessica Van Rooyen.' },
            { name: 'keywords', content: 'portfolio, design,  development, programming, code, front-end development, front-end design' },
            ]}
    />
    <Link rel="shortcut icon" href={favicon} />
    <Header location={location} />
    <Container>
      {children()}
    </Container>
    <Footer />
  </div>
);

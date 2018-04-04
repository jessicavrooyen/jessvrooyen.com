import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navigation from '../components/Navigation';
import { Container as BaseContainer } from '../styles/shared';
import '../styles/globals';
// import './index.css';

const Container = BaseContainer.extend`
  padding-top: 0;
`;
export default ({ children, location }) => (
  <main>
  
    <Container>
      {children()}
    </Container>
    <Navigation location={location} />
  </main>
);


{ /* <Helmet
      title="Jessica Van Rooyen | Portfolio"
      meta={[
          { name: 'description', content: 'Front-End Portfolio Website of Jessica Van Rooyen.' },
          { name: 'keywords', content: 'portfolio, design,  development, programming, code, front-end development, front-end design' },
          ]}
    > */ }
{ /* <Link rel="shortcut icon" href={favicon} /> */ }
{ /* </Helmet> */ }
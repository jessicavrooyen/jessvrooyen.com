import React from 'react';

import Form from '../components/Form';
import { StyledHeading2 } from '../styles/shared';

const ContactPage = () => (
  <div>
    <StyledHeading2>Say Hello</StyledHeading2>
    <p>Leave a message.</p>
    <Form />
  </div>
);

export default ContactPage;

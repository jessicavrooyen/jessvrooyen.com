import React from 'react';

import Form from '../components/Form';
import { StyledHeading } from '../styles/shared';

const ContactPage = () => (
  <div>
    <StyledHeading>Say Hello</StyledHeading>
    <p>Leave a message.</p>
    <Form />
  </div>
);

export default ContactPage;

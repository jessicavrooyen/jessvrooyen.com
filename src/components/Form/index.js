import React from 'react';
import styled from 'styled-components';

import ButtonSend from '../Buttons/Send';

const FormContainer = styled.div`
    textarea, input {
        width: 100%;
        height: auto;
    }
    label {
        font-size: .8em;
    }
`;
const Form = () => (
  <FormContainer>
    <form
      name="contact"
      action="thank-you"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <p>
        <label>Your Name:<br /> <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Your Email: <br /><input type="email" name="email" /></label>
      </p>
      <p>
        <label>Message:<br /> <textarea name="message" width="200" height="200" /></label>
      </p>
      <p>
        <ButtonSend type="submit">Send</ButtonSend>
      </p>
    </form>
  </FormContainer>
);

export default Form;

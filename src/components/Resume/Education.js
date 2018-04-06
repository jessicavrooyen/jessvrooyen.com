import React from 'react';
import styled from 'styled-components';
import { StyledHeading2 } from '../../styles/shared';

const Content = styled.div`
    overflow: auto;
    margin-bottom: 5rem;
`;

const Divider = styled.div`
    border-top: 1px solid #444;
`;

const Left = styled.div`
    width: 250px;
    border-bottom: 2px solid #03E0F2;
    margin-bottom: 1rem;
    
`;

const Date = styled.div`
    font-size: .8em;
    color: #555;
    letter-spacing: 3px;
    margin-bottom: .5rem;
`;


const General = styled.div`
    margin-bottom: 2.5rem;
    
    span {
        line-height: 2.5;
        font-weight: 600;
        border-bottom: 1px solid #444;
        
    }
`;

const Education = () => (
  <Content>
    <Left>
      <StyledHeading2>
            General Education Diploma
      </StyledHeading2>
    </Left>
    <Date>2012</Date>
    <General>
      <span>Institute:</span><br /> Prometric<br />
      <span>Principal Studies:</span><br />
         General Education (Grade 12 High School Equivalent.)
    </General>

    <Divider />

    <Left>
      <StyledHeading2>
            Bachelor of Fine Arts
      </StyledHeading2>
    </Left>
    <Date>September 2012 - August 2017</Date>
    <General>
      <span>Institute:</span><br /> Academy of Art University(Online)<br />
      <span>Principal Studies:</span><br /> BFA in Web Design and New Media
    </General>

    <Divider />

    <Left>
      <StyledHeading2>
            Techdegree
      </StyledHeading2>
    </Left>
    <Date>2014 - Present</Date>
    <General>
      <span>Institute:</span><br /> Treehouse<br />
      <span>Principal Studies:</span><br /> Full-Stack Javascript Techdegree
    </General>

    <Divider />
  </Content>

);

export default Education;

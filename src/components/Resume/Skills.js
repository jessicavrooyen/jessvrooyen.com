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

const General = styled.div`
    margin-bottom: 2.5rem;
    
    span {
        line-height: 2.5;
        font-weight: 600;
        border-bottom: 1px solid #444;
    }
`;

const Skills = () => (
  <Content>
    <Left>
      <StyledHeading2>
            Social Skills
      </StyledHeading2>
    </Left>
    <General>
    - Clear and effective communication with individuals<br />
    - Patient and friendly approach to handling situations <br />
    - Can deliver on requests in a timely manner<br />
    - Fluent in both English and Afrikaans<br />
    - Can handle conflict with a levelheaded approach<br />
    </General>

    <Divider />

    <Left>
      <StyledHeading2>
            Organizational Skills
      </StyledHeading2>
    </Left>
    <General>
    - Clear and effective communication with individuals<br />
    - Patient and friendly approach to handling situations <br />
    - Can deliver on requests in a timely manner<br />
    - Fluent in both English and Afrikaans<br />
    - Can handle conflict with a levelheaded approach<br />
    </General>

    <Divider />

    <Left>
      <StyledHeading2>
            Computer Skills
      </StyledHeading2>
    </Left>
    <General>
      <span>Programming Languages:</span><br />
        - HTML5 and CSS3<br />
        - Javascript (Vanilla, Node, React, React Native, Express, Apollo) <br />
        - PHP and MySQL<br />
    </General>

    <Divider />

    <Left>
      <StyledHeading2>
            Additional Information
      </StyledHeading2>
    </Left>
    <General>
      <span>Software Proficiency:</span><br />
        - Microsoft Word - Expert<br />
        - Microsoft Excel - Advanced<br />
      <span>Adobe Software: (5+ Years of experience)</span><br />
        - Photoshop - Expert<br />
        - InDesign - Expert<br />
        - Illustrator - Expert<br />
        - After Effects - Advanced<br />
        - Premier Pro (Video Editing) - Advanced<br />
        - Lightroom(Photography/Editing) - Advanced<br />

      <span>Additional Software:</span><br />
        - Sketch<br />
        - Afinity Designer<br />
        - Invision Studio (Early Access)<br />
        - Slack<br />
        - Visual Studio Code<br />
    </General>

    <Divider />
  </Content>

);

export default Skills;

import React from 'react';
import styled from 'styled-components';
import Education from './Education';
import Work from './Work';
import Skills from './Skills';

const ResumeContainer = styled.div``;

const Resume = () => (
  <ResumeContainer>
    <h2>Education</h2>
    <Education />
    <h2>Work</h2>
    <Work />
    <h2>Skills and Competences</h2>
    <Skills />
  </ResumeContainer>

);

export default Resume;

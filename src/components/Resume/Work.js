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
    font-size: .9em;
    span {
        line-height: 2.5;
        font-weight: 800;
        border-bottom: 1px solid #444;
        
    }
`;

const Work = () => (
  <Content>
    <Left>
      <StyledHeading2>
            Tip Trac
      </StyledHeading2>
    </Left>
    <Date>January 2010 - November 2011</Date>
    <General>
      <span>Position:</span><br /> Administrator / Customer Consultant<br />
      <span>Type of Business:</span><br />
        Earth Moving and Machine-Part Supplier.<br />
      <span>Responsibilities:</span><br />
      - Contact and assist customers both in person and via email/phone.<br />
      <span>General Administrator Duties:</span><br />
      - Answer emails/phone<br />
      - Enter data for 40+ employees and input tax/salary/other money related data<br />
      <span>Employer:</span><br />
      Gysbert Van Rooyen.

    </General>

    <Divider />

    <Left>
      <StyledHeading2>
            Bargain Books
      </StyledHeading2>
    </Left>
    <Date>January 2012 - December 2012</Date>
    <General>
      <span>Position:</span><br /> Sales<br />
      <span>Type of Business:</span><br /> Book Seller<br />
      <span>Responsibilities:</span><br /> Assist customers, make sales, organise shelves, order books from publishers, receive and sign for stock/packages. Input data to computer database and print barcode stickers.<br />
      <span>Employer:</span><br />
      Bargain Books HR.

    </General>

    <Divider />

    <Left>
      <StyledHeading2>
            Twisted Pixels
      </StyledHeading2>
    </Left>
    <Date>February 2013 - 2014</Date>
    <General>
      <span>Position:</span><br /> Designer and Web Developer<br />
      <span>Type of Business:</span><br /> Web Design and Development Studio<br />
      <span>Responsibilities:</span><br />
        Sit in on meetings with customers. Discuss needs and services needed. Take notes and schedule follow up appointments/progress emails.
        Assist employer in design and development of websites.
        Edit product photographs / Take photographs.
        Call clients and send along progress links/any updates/concerns/due dates.
        Brainstorm ideas with employer, discuss programming options, design concerns, solutions, and creative thinking/ideation.
        Prototyping, wireframing, user interface design, user experience analyses.<br />
      <span>Employer:</span><br />
      Quentin Van Vuuren
    </General>

    <Divider />
  </Content>

);

export default Work;

import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import arrow from './left-chevron.svg';


const Wrapper = styled.div`
    display: flex;
    position: relative;
`;

const Content = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    padding: 2rem 1.0875rem 16rem 1.0875rem;
    color: #23222a;
`;

const Back = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    img[data-info="back"] {
        width: 25px;
        height: 25px;
        margin: 0 1rem 0 0;
    }
`;

const Avatar = styled.div`
    height: 40px;
    width: 40px;
    image-rendering: -moz-crisp-edges;
    image-rendering: -o-crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    -ms-interpolation-mode: nearest-neighbor;

    img {
        border-radius: 50%;
    }
`;

const Name = styled.h4`
    margin: 0 0 0 1rem;
    color: #333;
`;

const Details = styled.div`
    width: 100%;
    margin-top: 6rem;
    text-align: center;

    h1 {
        color: #333;
    }

    span {
        &:not(:last-child) {
            margin-right: .25rem;
            &:after {
                content: ',';
            }
        }
    }
`;

const ProjectHeader = ({
  avatar, name, title, date, areas,
}) => (
  <Wrapper>
    <Content>
      <Back to="/">
        <img src={arrow} data-info="back" alt="test" />
        <div id="avatar-to-back">
          <Avatar>
            <img src={avatar} alt={name} />
          </Avatar>
        </div>
        <Overdrive id="name-to-back">
          <Name>{name}</Name>
        </Overdrive>
      </Back>
      <Details>
        <h1>{title}</h1>
        <p>{date}</p>
        <div>{areas.map(area => (
          <span key={area}>{area}</span>
        ))}
        </div>
      </Details>
    </Content>
  </Wrapper>
);

export default ProjectHeader;

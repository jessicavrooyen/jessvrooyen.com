import styled, { css } from 'styled-components';

export const Container = styled.div`
    max-width: 80em;
    margin: 0 auto;
    padding: 1.45rem 1.0875rem;
`;

export const StyledHeading = styled.h1`
    font-family: "Fira Serif", serif;
    font-weight: 700;
    font-size: 5rem;
    line-height: 1;
    margin-bottom: 1.24rem;
    color: #23222A;
`;

export const StyledHeading2 = StyledHeading.extend`
        font-weight: 300;
        font-size: 1.5rem;
        margin: 1.2rem 0 .5rem 0;
`;


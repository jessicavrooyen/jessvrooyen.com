import styled, { css } from 'styled-components';

export const Container = styled.div`
    max-width: 80em;
    margin: 0 auto;
    padding: 1rem 1.0875rem;
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
        font-size: 3rem;
        text-align: center;
        border-bottom: 2px solid #252525;
        padding-bottom: 1rem;
        width: 500px;
        margin: 0 auto 4rem auto;
`;


import { css } from 'styled-components';

export const sizes = {
  xs: '22.5em',
  sm: '40em',
  md: '54em',
  lg: '78em',
  xl: '125em',
};

export const media = {
  xs: (...args) => css`
    @media (max-width: ${sizes.xs}) {
      ${css(...args)}
    }
  `,
  sm: (...args) => css`
    @media (max-width: ${sizes.sm}) {
      ${css(...args)}
    }
  `,
  md: (...args) => css`
    @media (max-width: ${sizes.md}) {
      ${css(...args)}
    }
  `,
  lg: (...args) => css`
    @media (max-width: ${sizes.lg}) {
      ${css(...args)}
    }
  `,
  xl: (...args) => css`
    @media (max-width: ${sizes.xl}) {
      ${css(...args)}
    }
  `,
  hover: (...args) => css`
    @media not all and (hover: none) {
      ${css(...args)}
    }
  `,
};

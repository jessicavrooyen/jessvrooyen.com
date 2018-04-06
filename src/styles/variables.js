import { css } from 'styled-components';

export const mq = {
  xs: '22.5em',
  sm: '40em',
  md: '54em',
  lg: '78em',
  xl: '125em',
};

export const media = {
  xs: (...a) => css`
    @media (max-width: ${mq.xs}) {
      ${css(...a)}
    }
  `,
  sm: (...a) => css`
    @media (max-width: ${mq.sm}) {
      ${css(...a)}
    }
  `,
  md: (...a) => css`
    @media (max-width: ${mq.md}) {
      ${css(...a)}
    }
  `,
  lg: (...a) => css`
    @media (max-width: ${mq.lg}) {
      ${css(...a)}
    }
  `,
  xl: (...a) => css`
    @media (max-width: ${mq.xl}) {
      ${css(...a)}
    }
  `,
  hover: (...a) => css`
    @media not all and (hover: none) {
      ${css(...a)}
    }
  `,
};

// const rule = (d, v) => `${d}: ${v};`;

// export const getOuterSpace = p =>
//   css`
//     ${rule(p, spaces.p500)}
//     ${media.lg`
//       ${rule(p, spaces.p300)}
//     `}
//     ${media.md`
//       ${rule(p, spaces.p300)}
//     `}
//     ${media.sm`
//       ${rule(p, spaces.p200)}
//     `}
//   `;

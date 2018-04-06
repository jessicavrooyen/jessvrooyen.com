import styled, { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: off */
injectGlobal`
    * {
        box-sizing: border-box;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-kerning: auto;
    }

    ::selection {
        color: #333;
        background: transparent;
    }
    html, body {
        height: 100%;
        line-height: 1.5em;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
  }
  @media screen and (min-width: 20rem) {
    html {
      font-size: calc(1rem + 0.5 * ((100vw - 20rem) / 60));
      line-height: calc(1em + 0.3 * ((100vw - 20em) / 60));
    }
    }
    @media screen and (min-width: 80em) {
        html {
        font-size: 1.5rem;
        line-height: 1.3em;
        }
    }
    body {
        background: #fff;
        color: #23222A;
        backface-visibility: hidden;
        font-weight: 200;
    }
    h1,h2,h3,h4,h5,h6 {
        font-weight: 300;
        line-height: inherit;
    }
    ul {
        margin: 0;
        padding: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
        transition: color ease-in .3s;
    }

    a:hover {
        color: #03E0F2;
    }

    ${'' /* .gatsby-resp-image-wrapper {
        margin: 2.75rem 0;
    } */}
`;

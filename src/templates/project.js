/* eslint react/no-danger: off */

import React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import styled from 'styled-components';

import SEO from '../components/SEO';
import ProjectPagination from '../components/ProjectPagination';

import { Container as IndividualContainer } from '../styles/shared';

const Container = IndividualContainer.extend`
  
`;

const Images = styled.div`
  
`;
const Project = (props) => {
  const { slug, next, prev } = props.pathContext;
  const postNode = props.data.markdownRemark;
  const project = postNode.frontmatter;

  return (
    <div>
      <Helmet title={`${project.title} | Portfolio`} />
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Container>
        <Images>
          <Img sizes={project.cover.childImageSharp.sizes} />
        </Images>

        <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
        <ProjectPagination next={next} prev={prev} />

      </Container>
    </div>
  );
};

export default Project;

/* eslint no-undef: off */
export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        cover {
          childImageSharp {
            sizes(
              maxWidth: 1600
              quality: 90
            ) {
              ...GatsbyImageSharpSizes
            }
            resize(width: 800) {
              src
            }
          }
        }
        title
        areas
      }
    }
  }
`;

import React from 'react';
import styled from 'styled-components';

import { Container as ImageContainer } from '../styles/shared';
import Card from '../components/Card';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .gatsby-image-outer-wrapper, .gatsby-image-wrapper {
    position: static !important;
  }
`;

const Container = ImageContainer.extend`
 
`;

const Index = (props) => {
  const projectEdges = props.data.allMarkdownRemark.edges;

  return (
    <div>
      {/* <Header
        avatar={config.avatar}
        name={config.name}
        location={config.location}
        socialMedia={config.socialMedia}
      /> */}
      <Container>
        <Grid>
          {projectEdges.map(project => (
            <Card
              title={project.node.frontmatter.title}
              cover={project.node.frontmatter.cover.childImageSharp.sizes}
              path={project.node.fields.slug}
              areas={project.node.frontmatter.areas}
              slug={project.node.fields.slug}
              key={project.node.fields.slug}
            />
        ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Index;

/* eslint no-undef: off */
export const pageQuery = graphql`
  query HomeQuery {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            cover {
              childImageSharp {
                sizes(
                  maxWidth: 850
                  quality: 90
                ) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            title
            areas
          }
        }
      }
    }
  }
`;

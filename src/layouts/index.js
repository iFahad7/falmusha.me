import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";
import Header from "../components/Header";
import COLORS from "../colors";

import "prismjs/themes/prism.css";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0px auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

  a {
    color: ${COLORS.DARK};
    &:hover {
      color: ${COLORS.BLACK};
    }
  }
`;

const Container = styled.div``;

export default ({ children, data }) => (
  <Body>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: "Personal website" },
        { name: "keywords", content: "blog, showcase, personal" }
      ]}
    >
      <style type="text/css">{`
        body {
          background-color: ${COLORS.LIGHTEST};
        }
    `}</style>
    </Helmet>
    <Header />
    <Container>{children()}</Container>
  </Body>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

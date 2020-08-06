import PropTypes from 'prop-types';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './Header';

const Layout =({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  
  return (
    <>
      <Header siteTitle= { data.site.siteMetadata.title } />
      <main>{ children }</main>
    </> 
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

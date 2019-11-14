import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className='left'>
      <h1>Welcome.</h1>
    </div>
    <div className='right'>
    </div>
  </Layout>
);

export default IndexPage;

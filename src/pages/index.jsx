import React from 'react';
import { Layout } from 'antd';
import Header from '../components/PageLayout/Header';

import SidebarWrapper from '../components/PageLayout/Sidebar';
import AboutMe from '../components/HomePage/AboutMe';

const homePage = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <>
          <AboutMe />
        </>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default homePage;

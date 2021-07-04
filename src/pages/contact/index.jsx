import React from 'react';
// import { Layout, Row, Col } from 'antd';
import { Layout } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
// import ContactForm from '../../components/ContactForm';
import SEO from '../../components/Seo';

const Contact = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      {/* TODO: change SEO content */}
      <SEO
        title="Contact"
        description="Do not hesitate to contact me."
        path="contact"
        keywords={['quyentat', 'tatviquyen', 'tvq']}
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Contact</h1>
        </div>
        {/* <Row gutter={[40, 20]}>
          <Col sm={24} md={24} lg={12}>
            <img
              src="../../contact.png"
              alt="contact"
              className="widthFull contactImgBorder"
            />
          </Col>
          <ContactForm />
        </Row> */}
        <div className="textCenter">
          <img
            src="../../images/undraw_under_construction_46pa.png"
            alt="contact"
            className="contactImgBorder"
            width="600px"
          />
          <h3>Under Construction!</h3>
        </div>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Contact;

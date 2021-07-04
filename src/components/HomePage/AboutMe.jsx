import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../AbouTile';
import ButtonCV from './ButtonCV';
import Stacks from './Stacks';
import { stripTags } from '../../utils/stripTags';

import Config from '../../../config';
import SEO from '../Seo';

const pageText = {
  paraOne: 'My name is Quyen Tat. I\'m a web developer about 3+ experience years. I am obsessed about Web Development and I like to experiment with different web technologies. Currently I work mostly with Cloud services on AWS. I am interesting in how cloud computing operates to build a high-performance and scalable application.',
  paraTwo: 'I\'m a self taught programmer so I spend my time on learning new stacks, "googling" and solving problems to create awesome works. I build this blog for sharing my knowledge about tech stacks I learn, also a simple place to keep things.',
  paraThree: 'Almost posts in my blog are Vietnamese. I am still improving my English to be better and hope could make some English articles soon. 😉',
};

const AboutMe = () => {
  const title = `${Config.siteTitle} - ${Config.siteDescription}`;
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title={title}
          description={description}
          path=""
          keywords={['quyentat', 'tatviquyen', 'tvq']}
        />
        <h1 className="titleSeparate">Hello World 👋󠁧󠁢󠁥󠁮󠁧</h1>
        <p>{pageText.paraOne}</p>
        <p>{pageText.paraTwo}</p>
        <p>{pageText.paraThree}</p>
        {/* <p dangerouslySetInnerHTML={domHtml(pageText.paraOne)} /> */}
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="images/location.png"
            alt="location image"
            textH4="Born and bought up in"
            textH3="HCMC, Vietnam 🇻🇳"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="images/coffee.png"
            alt="coffee image"
            textH4="Crush Coffee"
            textH3="Turn Coffee into Code"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="images/cloud.png"
            alt="cloud image"
            textH4="Love Cloud (computing)"
            textH3="Build things with ☁️"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="images/music.png"
            alt="music image"
            textH4="Feel the beat"
            textH3="Indie & Lofi"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="images/finance.png"
            alt="personal finance image"
            textH4="A Prosperous Life"
            textH3="is my 🎯"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="images/travel.png"
            alt="travel image"
            textH4="Travelling"
            textH3="makes me feel 😊"
          />
        </Col>
      </Row>
      <Stacks />
      <ButtonCV />
    </>
  );
};
export default AboutMe;

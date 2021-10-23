import React, { useState, useEffect } from 'react';
import {
  Affix, Layout, Row, Col, Space,
} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF, faInstagram, faTwitter, faGithub, faLinkedinIn, faTelegramPlane, faSpotify,
} from '@fortawesome/free-brands-svg-icons';
import { faHandPeace, faCompass } from '@fortawesome/free-regular-svg-icons';

// eslint-disable-next-line import/no-unresolved
import { globalHistory } from '@reach/router';
import * as style from './sidebar.module.less';
import { useWindowSize } from '../../../utils/hooks';
import Config from '../../../../config';

const { Content } = Layout;
const {
  facebook, github, instagram, twitter, linkedin, telegram,
} = Config.social;

const DomContent = () => (
  <aside>
    <div className={style.profileAvatar} />
    <div className={`${style.name} centerAlign`}>
      <div className={`${style.boxName} centerAlign`}>
        <h2>
          <strong>Quyen</strong>
          {' '}
          Tat
        </h2>
      </div>
      <div className={`${style.badge} ${style.badgeGray}`}>Software Engineer</div>
      <div className={`centerAlign box ${style.faSocialIcon}`}>
        <a href={facebook} target="_blank" label="button" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href={twitter} target="_blank" label="button" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href={github} target="_blank" label="button" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
        <a href={instagram} target="_blank" label="button" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href={linkedin} target="_blank" label="button" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        <a href={telegram} target="_blank" label="button" rel="noopener noreferrer"><FontAwesomeIcon icon={faTelegramPlane} /></a>
      </div>
      <ul className={`box ${style.badge} ${style.contactBlock}`}>
        <li className={`${style.contactBlockItem}`}>
          <Space size="middle">
            <span>
              <FontAwesomeIcon icon={faHandPeace} size="lg" fixedWidth />
              {' '}
            </span>
            <span>{Config.siteDescription}</span>
          </Space>
        </li>
        <li className={`${style.contactBlockItem}`}>
          <Space size="middle">
            <span>
              <FontAwesomeIcon icon={faCompass} size="lg" fixedWidth />
              {' '}
            </span>
            <span>Ho Chi Minh City aka Saigon, Vietnam</span>
          </Space>
        </li>
        <SpotifyPlaying />
      </ul>
    </div>
  </aside>
);

const SpotifyPlaying = () => {
  const [data, setData] = useState({});

  const getSong = () => {
    fetch(`${process.env.GATSBY_API_URL}/spotify/playing`, {
      mode: process.env.GATSBY_DEV ? 'no-cors' : 'cors',
    })
      .then((response) => (response.ok ? response.json() : false))
      .then((resData) => {
        setData(resData);
      });
  };

  useEffect(() => {
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
    if (pathname === '/') {
      getSong();
    }
    return () => {
      setData({});
    };
  }, []);

  return (
    <>
      { data.playing
      && (
      <li className={`${style.contactBlockItem}`}>
        <Space size="middle">
          <span>
            <FontAwesomeIcon icon={faSpotify} size="lg" spin fixedWidth />
            {' '}
          </span>
          <a href={data.url} target="_blank" rel="noreferrer" style={{ whiteSpace: 'unset' }}>
            {`${data.song} - ${data.artist}`}
          </a>
        </Space>
      </li>
      )}
    </>
  );
};

const Sidebar = (props) => {
  const [width] = useWindowSize();
  const { children } = props;
  const { pathname } = globalHistory.location;
  let domContent = <DomContent />;
  if (width > 997) {
    domContent = (
      <Affix offsetTop={0}>
        <DomContent />
      </Affix>
    );
  }
  if (width < 768) {
    domContent = <></>;
    if (pathname === '/') {
      domContent = <DomContent />;
    }
  }
  return (
    <>
      <Layout>
        <Content className={`${style.content} ${style.background}`}>
          <Row>
            <Col sm={24} md={9} lg={6} className={style.sidebarContent}>
              { domContent }
            </Col>
            <Col sm={24} md={15} lg={18}>
              <Layout className={`${style.background} ${style.boxContent} borderRadiusSection`}>
                { children }
              </Layout>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export const Sidebar404 = (props) => {
  const { children } = props;
  return (
    <Layout>
      <Content className={`${style.content} ${style.background} `}>
        <Row>
          <Col sm={24} md={24} lg={24}>
            <Layout className={`${style.background} ${style.boxContent} ${style.sideBar404Radius}`}>
              {children}
            </Layout>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Sidebar;

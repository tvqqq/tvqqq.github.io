import React from 'react';
import { Typography, Timeline } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhp, faLaravel, faWordpress, faHtml5, faCss3, faJs, faVuejs, faBootstrap,
  faAws, faLinux, faDocker, faGithub,
} from '@fortawesome/free-brands-svg-icons';
import * as style from './home.module.less';

const Stacks = () => {
  const { Text } = Typography;
  return (
    <>
      <div className="box">
        <h1 className="titleSeparate">Stacks</h1>
        <Timeline pending={<Certificates />}>
          <Timeline.Item>
            <Text strong className={style.stackHeader}>Programming Stacks</Text>
            <br />
            <div className={style.stacks}>
              <FontAwesomeIcon icon={faPhp} size="2x" fixedWidth />
              <FontAwesomeIcon icon={faLaravel} size="2x" fixedWidth />
              <FontAwesomeIcon icon={faWordpress} size="2x" fixedWidth />
              <FontAwesomeIcon icon={faHtml5} size="2x" fixedWidth />
              <FontAwesomeIcon icon={faCss3} size="2x" fixedWidth />
              <FontAwesomeIcon icon={faJs} size="2x" fixedWidth />
              <FontAwesomeIcon icon={faVuejs} size="2x" fixedWidth />
              <FontAwesomeIcon icon={faBootstrap} size="2x" fixedWidth />
            </div>
          </Timeline.Item>
          <Timeline.Item>
            <Text strong className={style.stackHeader}>DevOps</Text>
            <br />
            <div className={style.stacks}>
              <FontAwesomeIcon icon={faAws} size="2x" fixedWidth />
              <FontAwesomeIcon icon={faLinux} size="2x" fixedWidth />
              <FontAwesomeIcon icon={faDocker} size="2x" fixedWidth />
              <FontAwesomeIcon icon={faGithub} size="2x" fixedWidth />
            </div>
          </Timeline.Item>
        </Timeline>
      </div>
    </>
  );
};

const Certificates = () => (
  <>
    <strong className={style.stackHeader}>My Certificates</strong>
    <br />
    <i>To be coming soon!</i>
  </>
);

export default Stacks;

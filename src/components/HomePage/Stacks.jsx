import React from 'react';
import { Typography, Timeline } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhp, faLaravel, faWordpress, faHtml5, faCss3, faJs,
  faAws, faLinux, faDocker, faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { LoadingOutlined } from '@ant-design/icons';
import * as style from './home.module.less';
import ButtonCV from './ButtonCV';

const Stacks = () => {
  const { Text } = Typography;
  const loadingIcon = <LoadingOutlined spin />;
  return (
    <>
      <div className="box">
        <h1 className="titleSeparate">Stacks</h1>
        <Timeline>
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
          <Timeline.Item dot={loadingIcon}>
            <Text strong className={style.stackHeader}>Certificates</Text>
            <br />
            <a href="https://www.credly.com/badges/363949db-e7ad-4ce3-97a6-635705442c0d/public_url" target="_blank" rel="noreferrer">
              <img
                src="../../certificates/aws-certified-solutions-architect-associate.png"
                width="160px"
                alt="AWS-SAA"
              />
            </a>
          </Timeline.Item>
          <Timeline.Item style={{ marginTop: 15 }}>
            <Text
              strong
              className={style.stackHeader}
              style={{ marginBottom: 5, display: 'block' }}
            >
              CV / Resume
            </Text>
            <ButtonCV />
          </Timeline.Item>
        </Timeline>
      </div>
    </>
  );
};

export default Stacks;

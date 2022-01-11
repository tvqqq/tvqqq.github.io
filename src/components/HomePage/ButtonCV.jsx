import React, { useState } from 'react';
import { Button, Typography } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const ButtonCV = () => {
  const { Text } = Typography;
  const NAME_CV_PDF = 'TatViQuyen-CV.pdf';
  const [counter, setCounter] = useState(0);
  const openLink = () => {
    window.open('https://bit.ly/tvq-cv', '_blank');
    fetch(`${process.env.GATSBY_API_URL}/cv/visitors`)
      .then((response) => response.json())
      .then((data) => {
        setCounter(data.cv_visitors);
        setTimeout(() => {
          setCounter(0);
        }, 3000);
      });
  };

  return (
    <>
      <div>
        <Button type="dashed" size="large" shape="round" onClick={openLink}>
          {NAME_CV_PDF}
          &nbsp;
          <FontAwesomeIcon icon={faExternalLinkAlt} />
          {counter > 0
             && (
             <Text code>
               (
               {counter}
               )
             </Text>
             )}
        </Button>
      </div>
    </>
  );
};

export default ButtonCV;

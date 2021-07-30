import React, { useEffect } from 'react';
import { Divider } from 'antd';

const COMMENTS_ID = 'comments-container';

const Comments = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'tvqqq/tvqqq.github.io');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('label', '💬');
    script.setAttribute('theme', 'github-light');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    const comments = document.getElementById(COMMENTS_ID);
    if (comments) comments.appendChild(script);

    // This function will get called when the component unmounts
    // To make sure we don't end up with multiple instances of the comments component
    return () => {
      const commentsId = document.getElementById(COMMENTS_ID);
      if (commentsId) comments.innerHTML = '';
    };
  }, []);

  return (
    <>
      <Divider plain style={{ fontSize: '24px', marginTop: '2rem' }}>💬</Divider>
      <div id={COMMENTS_ID} />
    </>
  );
};

export default Comments;

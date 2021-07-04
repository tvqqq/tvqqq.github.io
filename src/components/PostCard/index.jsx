import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import * as style from './postCard.module.less';
import Utils from '../../utils/pageUtils';

const PostCard = (props) => {
  const { data: { node: { frontmatter, excerpt } } } = props;

  return (
    <div className={style.postCard}>
      <Link to={Utils.resolvePageUrl(frontmatter.path)}>
        <div
          className={style.postCardImg}
          style={{
            backgroundImage: `url(${frontmatter ? frontmatter.cover.childImageSharp.fluid.src : ''})`,
          }}
        />
      </Link>
      <div className={style.mrTp20}>
        <Link to={Utils.resolvePageUrl(frontmatter.path)}>
          <h3 className={style.title}>{frontmatter ? frontmatter.title : ''}</h3>
        </Link>
        <div className={style.meta}>
          <span>{frontmatter ? moment(new Date(frontmatter.date)).format('DD-MM-YYYY') : ''}</span>
          <span style={{ margin: '0px 2px 0 -2px', color: '#ccc' }}>
            {' '}
            <FontAwesomeIcon icon={faHashtag} size="sm" fixedWidth />
          </span>
          <span>
            {`${frontmatter.tags.join(', ')}`}
          </span>
        </div>
        <p>{excerpt}</p>
      </div>
    </div>
  );
};

export default PostCard;

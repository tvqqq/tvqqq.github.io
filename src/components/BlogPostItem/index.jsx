import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import * as style from './blogPostItem.module.less';
import Utils from '../../utils/pageUtils';

const BlogPostItem = (props) => {
  const {
    data: {
      node: { frontmatter },
    },
  } = props;

  return (
    <Link to={Utils.resolvePageUrl(frontmatter.path)} className={style.blogPostItem}>
      <div className={style.blogPostItemContent}>

        <div className={style.time}>
          {frontmatter
            ? moment(new Date(frontmatter.date)).format('YYYY-MM-DD')
            : ''}
        </div>
        <div className={style.title}>
          {frontmatter ? frontmatter.title : ''}
        </div>
      </div>
    </Link>

  // <div className={style.postCard}>
  //   <Link to={Utils.resolvePageUrl(frontmatter.path)}>
  //     <div
  //       className={style.postCardImg}
  //       style={{
  //         backgroundImage: `url(${
  //           frontmatter ? frontmatter.cover.childImageSharp.fluid.src : ''
  //         })`,
  //       }}
  //     />
  //   </Link>
  //   <div className={style.mrTp20}>
  //     <Link to={Utils.resolvePageUrl(frontmatter.path)}>
  //       <h3 className={style.title}>
  //         {frontmatter ? frontmatter.title : ''}
  //       </h3>
  //     </Link>
  //     <div className={style.meta}>
  //       <span>
  //         {frontmatter
  //           ? moment(new Date(frontmatter.date)).format('DD-MM-YYYY')
  //           : ''}
  //       </span>
  //       <span style={{ margin: '0px 2px 0 -2px', color: '#ccc' }}>
  //         {' '}
  //         <FontAwesomeIcon icon={faHashtag} size="sm" fixedWidth />
  //       </span>
  //       <span>{`${frontmatter.tags.join(', ')}`}</span>
  //     </div>
  //     <p>{excerpt}</p>
  //   </div>
  // </div>
  );
};

export default BlogPostItem;

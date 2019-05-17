import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import VoteScore from './VoteScore';

const Post = (props) => {
  const { post } = props;
  return (
    <section className="post">
      {post ? (
        <>
          <VoteScore post={post}/>
          <div>
            <header className="postHeader">
              <span>Posted by {post.author} on <time daytime={post.timestamp}>
                <Moment format="MM-DD-YYYY">{post.timestamp}</Moment></time> 
              </span>
              <Link to={`/${post.category}/${post.id}`}><h1>{post.title}</h1></Link>
            </header>
            <p>{post.body}</p>
          </div>
        </>
      ) : null}
    </section>
  );
}

export default Post;

import React from 'react';

const Post = ({title,key,imageUrl}) => {
    return (
      <li key={key}>
        <h1 >{title}</h1>
       <img src={imageUrl} alt={title} />
      </li>
    );
};

export default Post;
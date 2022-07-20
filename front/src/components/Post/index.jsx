import React from 'react';
import "./post.css";

import { Link } from "react-router-dom";




const Post = ({key,title,imageUrl,id}) => {
    return (
      
        <Link to={`/post/${id}`}>
      <div key={key}>
        <h1 >{title}</h1>
       <img src={imageUrl} alt={title} />
      </div>
        </Link>
    );
};

export default Post;
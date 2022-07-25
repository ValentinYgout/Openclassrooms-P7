import React from 'react';
import "./post.css";

import { Link } from "react-router-dom";




const Post = ({key,title,imageUrl,id,author}) => {
    return (
      
        <Link to={`/post/${id}`}>
      <div className="Posts" key={key}>
        <h1 >
          {title}
         </h1>
          <span>    by {author}</span>

   

       <img src={imageUrl} alt={title} />
      </div>
        </Link>
    );
};

export default Post;
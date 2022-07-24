import axios from "axios";
import React, { useEffect, useState } from 'react';
import Post from "../../components/Post";
import { useAuth0 } from "@auth0/auth0-react";
import Like from "../../components/Like";


import "./home.css";


const Posts = () => {
  const {user, getAccessTokenSilently } = useAuth0();
 
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently();
        const response = await fetch('http://localhost:3500/api/post', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPosts(await response.json());
      } catch (e) {
        console.error(e);
      }
    })();
  }, [getAccessTokenSilently]);

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
{posts.map(({ _id,title,imageUrl,author,likes,dislikes,usersLiked,usersDisliked}) => (
      <li key={_id}>
        <Post
        title={title}
       
        id={_id}
        imageUrl={imageUrl}
      />
      <span>by {author}</span>
      <Like
          id={_id}
          likes = {likes}
          dislikes = {dislikes}
          usersLiked = {usersLiked}
          usersDisliked = {usersDisliked}
      />
        </li>
    ))}
</ul>
  );
};

export default Posts;







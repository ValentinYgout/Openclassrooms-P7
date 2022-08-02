import axios from "axios";
import React, { useEffect, useState } from 'react';
import Post from "../../components/Post";
// import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Like from "../../components/Like";
import Loading from "../../components/Loading";


import "./home.css";


const Home = () => {
  // const { getAccessTokenSilently } = useAuth0();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        // const token = await getAccessTokenSilently();
        const response = await fetch('http://localhost:3500/api/post', {
          headers: {
            // Authorization: `Bearer ${token}`,
          },
        });
        setPosts(await response.json());
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (

    <ul>
      {posts.map(({ _id, title, imageUrl, author, likes, dislikes, usersLiked, usersDisliked }) => (
        <li key={_id}>
          <Like
            id={_id}
            likes={likes}
            dislikes={dislikes}
            usersLiked={usersLiked}
            usersDisliked={usersDisliked}
          />
          <Post
            title={title}
            author={author}
            id={_id}
            imageUrl={imageUrl}
          />
        </li>
      ))}
    </ul>
  );
};

export default Home






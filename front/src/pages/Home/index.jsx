import axios from "axios";
import React from "react";
import Post from "../../components/Post";

import "./home.css";


const baseURL = "http://localhost:3500/api/post/";

export default function Home() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(post)

    });
  }, []);

  if (!post) return null;

  return (
    <ul>
    {post.map(({ _id,title,imageUrl}) => (
					<li key={_id}>
            <Post
						title={title}
           
            id={_id}
            imageUrl={imageUrl}
					/>
            </li>
				))}
    </ul>
  );
}
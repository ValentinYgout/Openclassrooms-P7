import axios from "axios";
import React from "react";
import Post from "../../components/Post";

const baseURL = "http://localhost:3500/api/post/";

export default function Home() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response.data)
    });
  }, []);

  if (!post) return null;

  return (
    <ul>
    {post.map(({ _id,title,imageUrl }) => (
					<Post
						title={title}
            key={_id}
            imageUrl={imageUrl}
					/>
				))}
    </ul>
  );
}
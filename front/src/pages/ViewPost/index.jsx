
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Post from "../../components/Post"
import EditDelete from '../../components/EditDelete';
import Like from "../../components/Like";

import './style.css'



function ViewPost() {
  const [post, setPost] = useState({});
  const { getAccessTokenSilently } = useAuth0();
  const { id } = useParams()
  const [shouldRefetchData, setShouldRefetchData] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently();
        const response = await fetch(`http://localhost:3500/api/post/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPost(await response.json());

      } catch (e) {
        console.error(e);
      }
    })();
  }, [getAccessTokenSilently, shouldRefetchData]);
  if (!post) return null;
  return (
    <div className="viewpost" key={post._id}>
      <Like
        //   token={token}
        //  currentUserId={currentUserId}
        id={post?._id}
        likes={post?.likes}
        dislikes={post?.dislikes}
        usersLiked={post?.usersLiked}
        usersDisliked={post?.usersDisliked}
      />
      <div className="PostEdit">
        <Post
          title={post.title}
          author={post.author}
          id={post._id}
          imageUrl={post.imageUrl}
        />
        <EditDelete

          refreshPost={() => setShouldRefetchData(!shouldRefetchData)}
          id={id}
          userId={post.userId}
        />
      </div>
    </div>
  )
}
export default ViewPost
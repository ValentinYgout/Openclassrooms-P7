import axios from "axios";
import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";

import Post from "../../components/Post"
import EditDelete from '../../components/EditDelete';
import Like from "../../components/Like";
import { useAuth0 } from "@auth0/auth0-react";



function ViewPost() {
  // const [token, setToken] = useState("");
  const [post, setPost] = useState({});
  const { user,getAccessTokenSilently } = useAuth0();
  const {id} = useParams()
  // const currentUserId = user.sub
  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently();
        const response = await fetch(`http://localhost:3500/api/post/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // setToken(token)
        setPost(await response.json());
        console.log()
      } catch (e) {
        console.error(e);
      }
    })();
  }, [getAccessTokenSilently]);

  if (!post) return null;
 
    return (
      <div   key={post._id}>
    
					<Post
						title={post.title}
          
            id={post._id}
            imageUrl={post.imageUrl}
					/>
          <EditDelete
          title={post.title}
         
          imageUrl={post.imageUrl}
          id= {id}
          />
          <Like
        //   token={token}
        //  currentUserId={currentUserId}
          id={post?._id}
          likes = {post?.likes}
          dislikes = {post?.dislikes}
          usersLiked = {post?.usersLiked}
          usersDisliked = {post?.usersDisliked}
          />
				
    </div>
    )
  }
  
  export default ViewPost
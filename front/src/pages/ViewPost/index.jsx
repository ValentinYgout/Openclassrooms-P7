import axios from "axios";
import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";

import Post from "../../components/Post"
import EditDelete from '../../components/EditDelete';
import Like from "../../components/Like";
import { useAuth0 } from "@auth0/auth0-react";
import './style.css'



function ViewPost() {
  // const [token, setToken] = useState("");


 
  
  const [post, setPost] = useState({});
  const { user,getAccessTokenSilently } = useAuth0();
  const {id} = useParams()
  const [shouldRefetchData, setShouldRefetchData] = useState(false);
  // const [ViewedPost,setViewedPost]= useState(post)
  

  console.log(post?.userId,  user?.sub)

  
  useEffect(() => {
    (async () => {
      try {
        console.log('testest')
        const token = await getAccessTokenSilently();
        const response = await fetch(`http://localhost:3500/api/post/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // setToken(token)
        setPost(await response.json());

        
        // console.log('currently displaying this',ViewedPost)
    
     
      } catch (e) {
        console.error(e);
      }
    })();
  }, [getAccessTokenSilently,shouldRefetchData]);
console.log(user)

  if (!post) return null;


  console.log(shouldRefetchData,'shouldRefetchData')
    return (
      <div className="viewpost"   key={post._id}>
      <Like
    //   token={token}
    //  currentUserId={currentUserId}
      id={post?._id}
      likes = {post?.likes}
      dislikes = {post?.dislikes}
      usersLiked = {post?.usersLiked}
      usersDisliked = {post?.usersDisliked}
      />
    <div className="PostEdit">

					<Post
						title={post.title}
            author={post.author}
            id={post._id}
            imageUrl={post.imageUrl}
					/>
        <EditDelete
        
        refreshPost={()=>setShouldRefetchData(!shouldRefetchData)}
        id= {id}
        userId={post.userId}
        />
    </div>
         
				
    </div>
    )
  }
  
  export default ViewPost
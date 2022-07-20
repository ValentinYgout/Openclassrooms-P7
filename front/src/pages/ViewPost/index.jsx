import axios from "axios";
import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";

import Post from "../../components/Post"
import EditDelete from '../../components/EditDelete';



function ViewPost() {

  const [post, setPost] = useState({});
  const {id} = useParams()
  useEffect(() => {
    axios.get(`http://localhost:3500/api/post/${id}`).then((response) => {
      console.log({id})

      setPost(response.data)
 

    });
  }, [id]);

  if (!post) return null;
 
    return (
      <ul>
    
					<Post
						title={post.title}
            key={post._id}
            id={post._id}
            imageUrl={post.imageUrl}
					/>
          <EditDelete
          title={post.title}
          key={post._id}
          imageUrl={post.imageUrl}
          id= {id}
          />
				
    </ul>
    )
  }
  
  export default ViewPost
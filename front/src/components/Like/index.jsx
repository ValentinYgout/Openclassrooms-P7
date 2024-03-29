import React, { useState, useEffect } from 'react';
import './like.css'
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const Like = (props) => {
  const { getAccessTokenSilently } = useAuth0();
  const { user } = useAuth0();

  const [like, setLike] = useState(props.likes)
  const [isLiked, setIsLiked] = useState((props?.usersLiked?.find(x => x === user?.sub) === user?.sub) ? true : false)
  const [dislike, setDislike] = useState(props.dislikes)
  const [Disliked, setDisliked] = useState((props?.usersDisliked?.find(x => x === user?.sub) === user?.sub) ? true : false)
  const HandleLike = async () => {
    setLike(like + (isLiked ? -1 : 1));
    setIsLiked(!isLiked);

    const token = await getAccessTokenSilently();
    const data = {
      like: !isLiked,
      userId: user.sub
    }
    console.log({ like } + "data to send")
    axios.post(`http://localhost:3500/api/post/${props.id}/like`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => console.log('Edit successful'))
      .catch(error => {
        console.log(error.message);
        console.error('There was an error!', error);
      });
  };
  const HandleDislike = async () => {
    setDislike(dislike + (Disliked ? -1 : 1));
    setDisliked(!Disliked);
    const token = await getAccessTokenSilently();
    const DislikeValue = function () {
      if (Disliked == true) { return 0 }
      if (Disliked == false) { return -1 }
    }
    const data = {
      like: DislikeValue(),
      userId: user.sub
    }
    axios.post(`http://localhost:3500/api/post/${props.id}/like`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => console.log('Edit successful'))
      .catch(error => {
        console.log(error.message);
        console.error('There was an error!', error);
      });
  };
  return (
    <div className="LikeDislike">
      <button
        disabled={Disliked}
        className={"like-button " + (isLiked ? "liked" : "")}
        onClick={HandleLike}
      >
        {"Likes"} | {like}
      </button>
      <button
        disabled={isLiked}
        className={"like-button " + (Disliked ? "disliked" : "")}
        onClick={HandleDislike}
      >
        {"Dislikes"} | {dislike}
      </button>
    </div>
  )
};
export default Like;
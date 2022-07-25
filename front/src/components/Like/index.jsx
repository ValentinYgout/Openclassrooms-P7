
import React, { useState, useEffect } from 'react';
import './like.css'
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const Like =  (props) => {
    const {getAccessTokenSilently } = useAuth0();
    
    // console.log(usersLikedList)
    // console.log(currentUserId)
    // console.log( usersLikedList.find(x=>x === currentUserId))
    const {user } = useAuth0();
    const [like, setLike] = useState(props.likes)
    console.log(like, ' when does it work??')


    const   [isLiked, setIsLike] = useState( ( props?.usersLiked?.find(x=>x === user?.sub) === user?.sub)?true:false)
    // console.log(( props?.usersLiked?.find(x=>x === user?.sub) === user?.sub)?true:false)
     const [dislike, setDislike] = useState(props.dislikes)
     const   [Disliked, setDisliked] = useState(( props?.usersDisliked?.find(x=>x === user?.sub) === user?.sub)?true:false)
     
     
     useEffect(() => {
         console.log('useeffect here', props)
    //     console.log("useEffect executed (component mounted)")

    //     // console.log(user.sub)
    //     // const usersLikedList =props.usersLiked
    //     // const currentUserId = user.sub
    //     //     const userDislikedList= props.usersDisliked
    //     //     console.log(usersLikedList)
        
    //     //    const userLikedCheck = ()=>{
    //     //     usersLikedList.find(x=>x == currentUserId)
    //     //    }
    //     //    const onlineUserLikedPost =  function (){
    //     //     if(userLikedCheck === currentUserId){
    //     //         return setIsLike(true)
    //     //     }
    //     //     else{
    //     //         return setIsLike(false)
    //     //     }
    //     //    }
    //     //    onlineUserLikedPost()

    //     //    const userdisLikedCheck = ()=>{
    //     //     console.log(userDislikedList)
    //     //     userDislikedList.find(x=>x == currentUserId)
    //     //    }
    //     //    const onlineUserDislikedPost =  function (){
    //     //     if(userdisLikedCheck == undefined || userDislikedList){
    //     //         return setDisliked(false)
    //     //     }
    //     //     else{
    //     //         return setDisliked(true)
    //     //     }
    //     //    }
    //     //    onlineUserDislikedPost()
           return()=>{
            console.log("read once???????")
            const usersLikedList =props.usersLiked
            const currentUserId = user.sub
     
            console.log( usersLikedList)
            console.log( currentUserId)
            console.log(props, ' return of stupid ass useeffect')
            // console.log( usersLikedList.find(x=>x === currentUserId))
    //         const usersLikedList =props.usersLiked
    //         const currentUserId = user.sub
    //         console.log(usersLikedList)
    //         console.log(currentUserId)
    //         //    console.log( usersLikedList.find(x=>x === currentUserId))
    //         console.log("useEffect cleanup (component unmounted)")
           }
      }, []);

console.log('HOW MANY TIMES HERE?')
    // const shouldbe= async()=>{
    //     const usersLikedList =props.usersLiked
    //     const currentUserId = user.sub
    //     console.log( usersLikedList)
    //     console.log( currentUserId)
    //     console.log( usersLikedList.find(x=>x === currentUserId))
      
             
    //                 if( usersLikedList.find(x=>x === currentUserId) === currentUserId){
    //                     console.log('setislike TRUE')
    //                     return setIsLike(true)
    //                 }
    //                 else{
    //                     console.log('setislike FALSE')
    //                     return setIsLike(false)
    //                 }
                   


    // }
  console.log(like+ ' like before handle')
    const  HandleLike = async() => {
        setLike(like+(isLiked?-1:1));
        setIsLike(!isLiked);
        
  console.log(like+ ' like after set')
        const  token= await getAccessTokenSilently();
    
       const data ={
            like: !isLiked,
            userId:user.sub}
        
     
        console.log({like}+ "data to send")
        axios.post(`http://localhost:3500/api/post/${props.id}/like`,data,{headers:{
            Authorization: `Bearer ${token}`
          }})
            .then(response => console.log('Edit successful'))
            .catch(error => {
                console.log(error.message);
                console.error('There was an error!', error);
            });
      };

      const  HandleDislike = async() => {
        setDislike(dislike + (Disliked?-1:1));
        setDisliked(!Disliked);
        const  token= await getAccessTokenSilently();
        const DislikeValue=  function(){
            if (Disliked== true){return 0}
            if (Disliked== false){return -1}
        }
        // console.log(DislikeValue())
        const data ={
             like: DislikeValue(),
             userId:user.sub}
             console.log(data)

             console.log({like}+ "data to send")

             axios.post(`http://localhost:3500/api/post/${props.id}/like`,data,{headers:{
                 Authorization: `Bearer ${token}`
               }})
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
        disabled ={isLiked}
          className={"like-button " + (Disliked ? "disliked" : "")}
          onClick={HandleDislike}
        >
            
          {"Dislikes"} | {dislike}
        </button>
        </div>
       
        
       
    
    )
};

export default Like;
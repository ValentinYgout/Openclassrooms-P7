import React from 'react';
import { useState, } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';



// n


const EditDelete = (props) => {
    const navigate =useNavigate()
    const { user,getIdTokenClaims} = useAuth0();
    const  isAuthor=  props.userId === user.sub?true:false
    const isAdmin = user["Roles/roles"]?.find(x=>x === "Admin")?true:false
    console.log(getIdTokenClaims('roles'))
    console.log(isAdmin,'is this account an admin??')
    console.log(isAuthor, 'is author? can we render edit???????')
    const isAllowedToEdit =isAdmin||isAuthor
    console.log(isAllowedToEdit,"isallowedtoedittttt because", isAdmin, "isadmin",isAuthor,"isAuthor")
    const {refreshPost,id}=props
    const [isEditing,setIsEditing]= useState(false)
    const [title, setTitle] = useState("");
    const [selectedFile, setSelectedFile] = useState("");
    const { getAccessTokenSilently } = useAuth0();

    console.log(props.author)
    const handleDelete = async () => {
        const token = await getAccessTokenSilently();
        console.log(token);
        

        axios.delete(`http://localhost:3500/api/post/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response =>(console.log('Delete successful'),
            alert('The post was deleted, you will now be redirected to Home'),  navigate("/home"))
            
            )
            .catch(error => {
                console.log(error.message);
                console.error('There was an error!', error);
            });
    }
    const handleSendEdit = async () => {
  
        const token = await getAccessTokenSilently();
   
        let formData = new FormData();
		formData.append("image", selectedFile);
		formData.append("title", title);
        formData.append("selectedFile", selectedFile.name);
   
       
        axios.put('http://localhost:3500/api/post/' + props.id, formData, {
            headers: {
				'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
				'Content-Type': 'multipart/form-data'
        
			}
        })
            .then(response =>{
                console.log(response,'Edit successful')
                alert("post edited")
                refreshPost()
                
            } )
            // window.location.reload()

            .catch(error => {
                alert(error.message)
                console.log(error.message);
                console.error('There was an error!', error);
            });
    }
    const handleEdit = () => {
        setIsEditing(true)
    }
    const handleCancelEdit = () => {
        setIsEditing(false)
    }

    

    return (

        isAllowedToEdit?
        isEditing?
            <div className='EditDelete'>
              <form>
      <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
         
        />
      </form>
                <button className="" onClick={() => handleCancelEdit()}>Cancel Edit</button>
                <button className="" onClick={() => handleSendEdit()}>Confirm Edit</button>
                <button disabled className="" onClick={() => handleDelete()}>delete</button>
            </div>
            :
            <div className='EditDelete'>
                <button className="" onClick={() => handleEdit()}>edit</button>
                <button className="" onClick={() => handleDelete()}>delete</button>
            </div>
            :<></>

       


    );
};

export default EditDelete;
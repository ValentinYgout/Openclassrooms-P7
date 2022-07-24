import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';




const EditDelete = (props) => {
    const [isEditing,setIsEditing]= useState(false)
    const [title, setTitle] = useState("");
    const [selectedFile, setSelectedFile] = useState("");
    const { getAccessTokenSilently } = useAuth0();

    const handleDelete = async () => {
        const token = await getAccessTokenSilently();
        console.log(token);
        console.log(props.id)

        axios.delete(`http://localhost:3500/api/post/${props.id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => console.log('Delete successful'))
            .catch(error => {
                console.log(error.message);
                console.error('There was an error!', error);
            });
    }
    const handleSendEdit = async () => {
        console.log('test')
        const token = await getAccessTokenSilently();
        console.log(props)
        let formData = new FormData();
		formData.append("image", selectedFile);
		formData.append("title", title);
        formData.append("selectedFile", selectedFile.name);
        console.log(formData)
       
        axios.put('http://localhost:3500/api/post/' + props.id, formData, {
            headers: {
				'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
				'Content-Type': 'multipart/form-data'
        
			}
        })
            .then(response => console.log('Edit successful'))
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
        isEditing?
            <div>
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
            <div>
                <button className="" onClick={() => handleEdit()}>edit</button>
                <button className="" onClick={() => handleDelete()}>delete</button>
            </div>

       


    );
};

export default EditDelete;
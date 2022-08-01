import React from 'react';
import { useState, } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import './style.css'





const EditDelete = (props) => {
    const { user} = useAuth0();

    const isAuthor = props.userId === user.sub ? true : false
    const isAdmin = user["userRoles"]?.find(x => x === "Admin") ? true : false
    const isAllowedToEdit = isAdmin || isAuthor

    const navigate = useNavigate()

   
    const {refreshPost, id } = props

    const [isEditing, setIsEditing] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)
    const [title, setTitle] = useState("");
    const [selectedFile, setSelectedFile] = useState("");

    const { getAccessTokenSilently } = useAuth0();

    const handleDelete = async () => {
        const token = await getAccessTokenSilently();
        axios.delete(`http://localhost:3500/api/post/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                alert('The post was deleted, you will now be redirected to Home')
                navigate("/home")
            })
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
            .then(response => {
                console.log(response, 'Edit successful')
                alert("post edited")
                refreshPost()

            })
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


    if (!isAllowedToEdit) {
        return <></>
    }

    return (

        <div>
            {(!isEditing && !isDeleting) && <div className='EditDelete'>
                <button className="" onClick={() => handleEdit()}>Edit</button>
                <button className="" onClick={() => setIsDeleting(true)}>delete</button>
            </div>}

            {isEditing && <div className='EditDelete'>
                <form>
                    <input
                        type="text"
                        placeholder='Enter new title here'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <input
                        type="file"
                        onChange={(e) => setSelectedFile(e.target.files[0])}

                    />
                </form>
                <button className="editDeleteButton" onClick={() => handleCancelEdit()}>Cancel Edit</button>
                <button className="editDeleteButton" onClick={() => handleSendEdit()}>Confirm Edit</button>
            </div>}

            {isDeleting && <div>
                <button className="editDeleteButton" onClick={() => setIsDeleting(false)}>Cancel delete</button>
                <button className="editDeleteButton" onClick={() => handleDelete()}>Confirm delete</button>
            </div>}
        </div>
    );
};

export default EditDelete;
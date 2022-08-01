import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import {useAuth0,withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../../components/Loading';
import { useNavigate } from 'react-router-dom';
import('./style.css')



const CreatePost = () => {
  const { user } = useAuth0();
  const navigate= useNavigate()

  const userId = user.sub
  const author = user.nickname

  const { getAccessTokenSilently } = useAuth0();

  const [title, setTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  const submitForm = async(e) => {
    const token = await getAccessTokenSilently();
		e.preventDefault();
		let formData = new FormData();
		formData.append("image", selectedFile);
		formData.append("title", title);
    formData.append("userId", userId);
    formData.append("author", author);
		formData.append("selectedFile", selectedFile.name);
		axios({
			method: 'post',
			url: 'http://localhost:3500/api/post',
			data: formData,
			headers: {
				'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
				'Content-Type': 'multipart/form-data'
        
			}
		})
		.then(function(response) {
			console.log(response);
      navigate("/home")

		})
		.catch(function(response) {
			console.log(response);
		});
  };

  return (
    <div className="create-post">
      <form>
      <input
      placeholder='Title'
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          // onChange={(e) => setSelectedFile(e.target.files[0])}
        />

        <button onClick={submitForm}>Submit</button>
      </form>
    </div>
  );



};


export default withAuthenticationRequired(CreatePost, {
  onRedirecting: () => <Loading />,
});
import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const CreatePost = () => {

  const [title, setTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  const submitForm = (e) => {
		e.preventDefault();
		let formData = new FormData();
		formData.append("image", selectedFile);
		formData.append("title", title);
		formData.append("selectedFile", selectedFile.name);
		axios({
			method: 'post',
			url: 'http://localhost:3500/api/post',
			data: formData,
			header: {
				'Accept': 'application/json',
				'Content-Type': 'multipart/form-data',
			}
		})
		.then(function(response) {
			console.log(response);
		})
		.catch(function(response) {
			console.log(response);
		});
  };

  return (
    <div className="App">
      <form>
      <input
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

export default CreatePost;
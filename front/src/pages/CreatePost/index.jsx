import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const CreatePost = () => {

  const [title, setTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3500/api/post",{
      "title":title,
      "selectedFile":selectedFile
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

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
          onChange={(e) => setSelectedFile(e.target.files[0].name)}
          // onChange={(e) => setSelectedFile(e.target.files[0])}
        />

        <button onClick={submitForm}>Submit</button>
      </form>
    </div>
  );






















//   const [title, setTitle] = useState("");
//   const [selectedFile, setSelectedFile] = useState(null)
//   const [message, setMessage] = useState("")
  
  
//   let handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//   formData.append("title", title);
//   formData.append("imageUrl", selectedFile);
//   axios.post('http://localhost:3500/api/post/',formData)
//   .then(function (response) {
//     console.log(response);
//     if (response.status === 200) {
//       setTitle("");
//       setMessage("User created successfully");
//     } else {
//       setMessage("Some error occured");
//     }
//   })
//   .catch(function (error) {
//       console.log(formData)
//       setMessage("Some error occured"+error);
//       console.log( error);
//     });

//   };
//  return(
  
//   <form onSubmit={handleSubmit}>
//     <input
//       type="text"
//       value={title}
//       placeholder="title"
//       onChange={(e) => setTitle(e.target.value)}
//     />
//      <input
//           type="file"
//           onChange={(e) => setSelectedFile(e.target.files[0])}
//         />

//     <button type="submit">Create</button>

//     <div className="message">{message ? <p>{message}</p> : null}</div>
//   </form>

//  )
};

export default CreatePost;
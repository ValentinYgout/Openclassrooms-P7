import React from 'react';
import { useState } from 'react';
import axios from 'axios';


const EditDelete = (props) => {

    const handleDelete = () => {
        console.log(props.id)
        axios.delete('http://localhost:3500/api/post/' + props.id)
            .then(response => console.log('Delete successful'))
            .catch(error => {
                console.log(error.message);
                console.error('There was an error!', error);
            });
    }
    const handleEdit = () => {
        console.log(props)
        const article = { title: 'Axios PUT Request Example' };
        axios.put('http://localhost:3500/api/post/' + props.id, article)
            .then(response => console.log('Edit successful'))
            .catch(error => {
                console.log(error.message);
                console.error('There was an error!', error);
            });
    }
    const handleToggleEdit=()=>{

    }


    return (
        <div>
            <button onClick={() => handleEdit()}>edit</button>
            <button onClick={() => handleToggleEdit()}>edit</button>
            <button onClick={() => handleDelete()}>delete</button>
        </div>
    );
};

export default EditDelete;
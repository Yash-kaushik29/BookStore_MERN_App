import React, { useState } from 'react';
import axios from "axios";
import BackButton from "../components/BackButton";
import Loader from "../components/Loader";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();

  const handleDelete = () => {
    setLoading(true);

    axios.delete(`http://localhost:5000/books/${id}`).then(() => {
      setLoading(false);
      navigate('/');
      alert("Book deleted successfully");
    }).catch((error) => {
      console.log(error);
      alert("An error occured. Please try again");
      setLoading(false);
    })
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-4xl my-4'>Delete Book</h1>

      {loading ? (
        <Loader /> 
      ) : (
        <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
          <h3 className='text-2xl text-red-700'>Are you sure you want to delete this book?</h3>

          <button className='p-4 bg-red-700 text-white m-8 w-full' onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  )
}

export default DeleteBook
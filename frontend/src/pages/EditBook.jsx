import React, { useEffect, useState } from "react";
import axios from "axios";
import BackButton from "../components/BackButton";
import Loader from "../components/Loader";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPrice(response.data.price);
        setPublishYear(response.data.publishYear);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        alert("An error occured. Please try again");
        setLoading(false);
      });
  }, []);

  const handleSubmit = () => {
    const data = {
      title,
      author,
      price,
      publishYear,
    };
    setLoading(true);

    axios
      .put(`http://localhost:5000/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("An error occured. Please try again");
        setLoading(false);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-4xl my-4">Enter Book Details</h1>

      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col border-2 border-sky-500 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            ></input>
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            ></input>
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Price</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            ></input>
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Publish Year</label>
            <input
              type="text"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            ></input>
          </div>
          <button
            className="p-2 bg-sky-400 px-4 py-2 w-full"
            onClick={handleSubmit}
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default EditBook;

import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BooksTable = ({books}) => {
  return (
    <table className="w-full border-separate border-spacing-2">
          <thead>
          <tr>
            <th className="border border-slate-500 rounded-md">No.</th>
            <th className="border border-slate-500 rounded-md">Title</th>
            <th className="border border-slate-500 rounded-md max-md:hidden">Author</th>
            <th className="border border-slate-500 rounded-md max-md:hidden">Price</th>
            <th className="border border-slate-500 rounded-md max-md:hidden">Publish Year</th>
            <th className="border border-slate-500 rounded-md">Operations</th>
          </tr>
          </thead>
          <tbody>
            {books.map((book, i) => (
              <tr key={book._id} className="h-8">
                <td className="border border-slate-500 rounded-md text-center">
                  {i+1}
                </td>
                <td className="border border-slate-500 rounded-md text-center">
                  {book.title}
                </td>
                <td className="border border-slate-500 rounded-md text-center max-md:hidden">
                  {book.author}
                </td>
                <td className="border border-slate-500 rounded-md text-center text-green-600 max-md:hidden">
                  ${book.price}
                </td>
                <td className="border border-slate-500 rounded-md text-center max-md:hidden">
                  {book.publishYear}
                </td>
                <td className="border border-slate-500 rounded-md">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className="text-2xl text-green-800" />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-400" />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-700" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
         </table>
  )
}

export default BooksTable
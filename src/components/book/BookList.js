import React, { useEffect } from "react";
import {
  selectBookList,
  getBooks,
} from "../../features/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
export default function BookList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector(selectBookList);
  const getBookList = async () => {
    dispatch(getBooks());
  };
  useEffect(() => {
    getBookList();
    // eslint-disable-next-line
  }, []);
  function handleCreate(e) {
    e.preventDefault();
    navigate("/book/add");
  }
  console.log({books});


  return (
    <div>
      <h1>Books</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Quantity</th>
            <th colSpan={2}>
              <button type="button" onClick={handleCreate}>
                Create
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book) => (
            <tr key={book.id}>
              <td>{book.id} </td>
              <td>{book.title} </td>
              <td>{book.quantity} </td>
              <td>
                <Link to={`/book/${book.id}`}>Detail</Link>
              </td>
              <td>
                <Link to={`/book/edit/${book.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

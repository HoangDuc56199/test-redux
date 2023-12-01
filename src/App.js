import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./components/book/BookList.js";
import BookEditing from "./components/book/BookEditing.js";
import BookDetail from "./components/book/BookDetail.js";
import BookAdding from "./components/book/BookAdding.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path={`/book/:bookId`} element={<BookDetail />} />
        <Route path={"/book/add"} element={<BookAdding />} />
        <Route path={`/book/edit/:bookId`} element={<BookEditing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

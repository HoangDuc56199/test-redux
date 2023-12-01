import axios from "axios";
const BOOK_MANAGEMENT_API =
  "https://6564970dceac41c0761e7c13.mockapi.io/booksManagement/books";
export const findBooks = async () => {
  let result = null;
  try {
    result = await axios.get(`${BOOK_MANAGEMENT_API}/`);
  } catch (e) {
    console.log("Find books API error: " + e);
  }
  return result;
};
export const findBook = async (bookId) => {
  let result = null;
  try {
    result = await axios.get(`${BOOK_MANAGEMENT_API}/${bookId}`);
  } catch (e) {
    console.log("Find book API error: " + e);
  }
  return result;
};
export const createBook = async (book) => {
  let result = null;
  try {
    result = await axios.post(`${BOOK_MANAGEMENT_API}/`, book);
  } catch (e) {
    console.log("Find book API error: " + e);
  }
  return result;
};
export const updateBook = async (book) => {
  let result = null;
  try {
    result = await axios.put(`${BOOK_MANAGEMENT_API}/${book.id}`, book);
  } catch (e) {
    console.log("Update book API error: " + e);
  }
  return result;
};
export const deleteBook = async (bookId) => {
  let result = null;
  try {
    result = await axios.delete(`${BOOK_MANAGEMENT_API}/${bookId}`);
  } catch (e) {
    console.log("Delete book API error: " + e);
  }
  return result;
};

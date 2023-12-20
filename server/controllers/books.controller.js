import { BookModel } from "../models/book-model.js";

export const searchBook = async (req, res) => {
  const name = req.params.name;
  const respBook = BookModel.searchBook(name, res);

};

export const allBooks = async (req, res) => {
  return BookModel.getAll(res);
};

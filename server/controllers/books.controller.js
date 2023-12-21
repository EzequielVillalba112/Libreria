import { BookModel } from "../models/book-model.js";

export const searchBook = async (req, res) => {
  const name = req.params.name;
  BookModel.searchBook(name, res);
};

export const allBooks = async (req, res) => {
  return BookModel.getAll(res);
};

export const popularBooks = async (req, res) => {
  return BookModel.popularBook(res);
};

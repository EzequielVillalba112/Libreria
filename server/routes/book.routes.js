import { Router } from "express";
import {
  allBooks,
  allGenres,
  login,
  popularBooks,
  searchBook,
  searchBooksCategori,
  searchBooksId,
} from "../controllers/books.controller.js";

const router = new Router();

router.get("/books/:name", searchBook);
router.get("/all", allBooks);
router.get("/popular", popularBooks);
router.get("/allgenre", allGenres);
router.get("/book/:id", searchBooksId);
router.get("/book/categoria/:categori", searchBooksCategori);

router.post("/login", login);

export default router;

import { Router } from "express";
import {
  allBooks,
  allGenres,
  popularBooks,
  searchBook,
  searchBooksId,
} from "../controllers/books.controller.js";

const router = new Router();

router.get("/books/:name", searchBook);
router.get("/all", allBooks);
router.get("/popular", popularBooks);
router.get("/allgenre", allGenres);
router.get("/book/:id", searchBooksId);

export default router;

import { Router } from "express";
import {
  allBooks,
  allGenres,
  popularBooks,
  searchBook,
} from "../controllers/books.controller.js";

const router = new Router();

router.get("/books/:name", searchBook);
router.get("/all", allBooks);
router.get("/popular", popularBooks);
router.get("/allgenre", allGenres);

export default router;

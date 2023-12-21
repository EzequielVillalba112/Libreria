import { Router } from "express";
import {
  allBooks,
  popularBooks,
  searchBook,
} from "../controllers/books.controller.js";

const router = new Router();

router.get("/books/:name", searchBook);
router.get("/all", allBooks);
router.get("/popular", popularBooks);

export default router;

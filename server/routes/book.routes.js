import { Router } from "express";
import { allBooks, searchBook } from "../controllers/books.controller.js";

const router = new Router();

router.get("/books/:name", searchBook);
router.get("/all", allBooks)

export default router;
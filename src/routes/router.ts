import express, { Router } from "express";
import { createForm, foo } from "../controllers/controller";

const router: Router = express.Router();

router.get("/", foo);
router.post("/create-form", createForm);

export { router };

import express, { Router } from "express";
import { createForm, foo, getForms } from "../controllers/FormController";
import { register } from "../controllers/RegistrationController";

const router: Router = express.Router();

router.get("/", foo);
router.post("/forms", getForms);
router.post("/create-form", createForm);

router.post("/register/:slug", register);

export { router };

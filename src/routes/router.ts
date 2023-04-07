import express, { Router } from "express";
import { createForm, foo, getForm } from "../controllers/FormController";
import { register } from "../controllers/RegistrationController";

const router: Router = express.Router();

router.get("/", foo);
router.get("/form", getForm);
router.post("/create-form", createForm);

router.post("/register/:slug", register);

export { router };

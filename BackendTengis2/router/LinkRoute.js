import express from "express";
import getLinks from "../controller/LInkController.js";
import loginUser from "../login.js";

const linkRouter = express.Router();

linkRouter.get("/link", getLinks);
linkRouter.post("/login", loginUser);

export default linkRouter;

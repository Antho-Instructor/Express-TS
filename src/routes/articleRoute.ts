import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
	res.send("Article Route");
});

router.post("/", (req: Request, res: Response) => {
	res.status(201).send("Article Route");
});

export default router;

import express, { Request, Response } from "express";
import { prisma } from "../services/prisma";
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
	try {
		const categories = await prisma.category.findMany();
		res.status(200).send(categories);
	} catch (error) {
		console.error({ error: (error as Error).message });
	} finally {
		prisma.$disconnect();
	}
});

router.get("/:id", async (req: Request, res: Response) => {
	try {
		const category = await prisma.category.findUnique({
			where: {
				id: parseInt(req.params.id),
			},
		});
		res.status(200).send(category);
	} catch (error) {
		console.error({ error: (error as Error).message });
	} finally {
		prisma.$disconnect();
	}
});

router.post("/", async (req: Request, res: Response) => {
	try {
		const category = await prisma.category.create({
			data: {
				name: req.body.name,
			},
		});
		res.status(201).send(category);
	} catch (error) {
		console.error({ error: (error as Error).message });
	} finally {
		prisma.$disconnect();
	}
});

export default router;

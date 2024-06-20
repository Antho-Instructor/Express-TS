import express, { Request, Response } from "express";
import { prisma } from "../services/prisma";
const router = express.Router();

type ArticleType = {
	title: string;
	content: string;
	categoriesId: number[];
};

router.get("/", async (req: Request, res: Response) => {
	try {
		const categories = await prisma.article.findMany({
			include: {
				categories: true,
			},
		});
		res.status(200).send(categories);
	} catch (error) {
		console.error({ error: (error as Error).message });
	} finally {
		prisma.$disconnect();
	}
});

router.get("/:id", async (req: Request, res: Response) => {
	try {
		const category = await prisma.article.findUnique({
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
		const { title, content, categoriesId } = req.body as ArticleType;

		const category = await prisma.article.create({
			data: {
				title,
				content,
				categories: {
					connect: categoriesId.map((id) => ({ id })),
				},
			},
			include: {
				categories: true,
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

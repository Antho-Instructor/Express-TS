import express, { Request, Response } from "express";
import { prisma } from "../services/prisma";
const router = express.Router();

interface ArticleBody {
	title: string;
	content: string;
	categoryId: number;
}

router.get("/", async (req: Request, res: Response) => {
	try {
		const categories = await prisma.article.findMany();
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
		const { title, content, categoryId } = req.body as ArticleBody;

		const category = await prisma.article.create({
			data: {
				title,
				content,
				categories: {
					connect: {
						id: categoryId,
					},
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

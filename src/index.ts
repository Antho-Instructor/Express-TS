import express, { Request, Response } from "express";
import articleRoute from "./routes/articleRoute";
import categoryRoute from "./routes/categoryRoute";

const app = express();
const PORT = 3310;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
	res.send("Hello, TypeScript with Express!");
});

app.use("/api/categories", categoryRoute);
app.use("/api/articles", articleRoute);

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});

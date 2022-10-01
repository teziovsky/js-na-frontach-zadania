import dotenv from "dotenv";
import express from "express";
import { router } from "./router";

dotenv.config();

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.json());

app.use(router);

app.listen(PORT, () => console.log(`🚀 Server ready at: http://localhost:${PORT}`));

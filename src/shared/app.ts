import express from "express";
import cors from "cors";
import helmet from "helmet";
import dontev from "dotenv";

dontev.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.json({ limit: process.env.MAX_REQUEST_SIZE }));

export { app };
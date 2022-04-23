import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

import patientRouter from "./router/PatientRouter.js";

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT;

mongoose
	.connect(DATABASE_URL)
	.then(() => {
		console.log("Database connected");
	})
	.catch((error) => {
		console.error("Error to connect to database: " + error.message);
	});

const app = express();

app.use(cors());
app.use(express.json({}));
app.use(morgan("dev"));
app.use(patientRouter);

app.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`);
});

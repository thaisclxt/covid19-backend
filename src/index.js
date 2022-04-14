import express from "express";
import patientController from "./controller/PatientController.js";

const PORT = 3000;

const app = express();

app.listen();

app.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`);
});

patientController.function();

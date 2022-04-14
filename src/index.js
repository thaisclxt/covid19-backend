import express from "express";
import patients from "./model/PatientModel.js";

console.log(patients);

const PORT = 3000;

const app = express();

app.listen();

app.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`);
});

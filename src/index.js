import express from "express";
import patientRouter from "./router/PatientRouter.js";

const PORT = 3000;

const app = express();

app.use(express.json({}));
app.use(patientRouter);

app.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`);
});

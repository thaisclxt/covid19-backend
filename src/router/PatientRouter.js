import express from "express";
import patientController from "../controller/PatientController.js";

const router = express.Router();

router.get("/api/patient", patientController.function);

export default router;

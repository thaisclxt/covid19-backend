import express from "express";
import patientController from "../controller/PatientController.js";

const router = express.Router();

router.get("/api/patients", patientController.getAll);
router.post("/api/schedule", patientController.post);

export default router;

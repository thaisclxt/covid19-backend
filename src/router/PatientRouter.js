import express from "express";
import patientController from "../controller/PatientController.js";

const router = express.Router();

router.get("/api/patients", patientController.getAll);
router.post("/api/schedule", patientController.schedule);
router.put("/api/patients/:id", patientController.update);

export default router;

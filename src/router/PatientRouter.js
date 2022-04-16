import express from "express";
import PatientController from "../controller/PatientController.js";

const patientController = new PatientController();

const router = express.Router();

router.get("/api/patients", patientController.getAll);
router.get("/api/patients/:day", patientController.getPatientsOnDay);
router.post("/api/schedule", patientController.schedule);
router.put("/api/patients/:id", patientController.update);

export default router;

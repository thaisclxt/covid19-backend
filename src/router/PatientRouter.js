import express from "express";
import PatientController from "../controller/PatientController.js";

const patientController = new PatientController();

const router = express.Router();

router.get("/api/patients", patientController.getAll);
router.get("/api/patients/onDay/:day", patientController.getPatientsOnDay);
router.get("/api/patients/onDate/:date", patientController.getPatientsOnDate);
router.put("/api/patients/:id", patientController.update);
router.post("/api/schedule", patientController.schedule);

export default router;

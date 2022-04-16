import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
	name: { type: String, required: true },
	birthDate: { type: Date, required: true },
	scheduleDate: { type: Date, required: true },
	wasVaccinated: { type: Boolean, default: false },
});

const patientModel = mongoose.model("patient", patientSchema);

export default patientModel;

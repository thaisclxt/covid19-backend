import crypto from "crypto";
import patients from "../model/PatientModel.js";

const controller = {
	getAll(request, response) {
		response.send({ patients });
	},

	schedule(request, response) {
		try {
			const { name, bithDate, scheduleDate } = request.body;

			const patient = {
				id: crypto.randomUUID(),
				name,
				bithDate,
				scheduleDate,
				wasVaccinated: false,
			};

			patients.push(patient);
			response.send({ message: "Patient created" });
		} catch (error) {
			response.status(500).send({ message: "Something went wrong" });
			console.log(error);
		}
	},

	update(request, response) {
		try {
			const { id } = request.params;
			const { name, bithDate, scheduleDate, wasVaccinated } = request.body;

			const patientIndex = patients.findIndex((patient) => patient.id === id);

			if (!patients[patientIndex])
				return response.status(404).send({ message: "Patient not found" });

			const newPatient = {
				...patients[patientIndex],
				wasVaccinated,
			};

			patients[patientIndex] = newPatient;
			response.send({ patient: patients[patientIndex] });
		} catch (error) {
			response.status(500).send({ message: "Something went wrong" });
			console.log(error);
		}
	},
};

export default controller;

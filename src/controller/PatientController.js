import crypto from "crypto";
import patients from "../model/PatientModel.js";

const controller = {
	getAll(request, response) {
		response.send({ patients });
	},

	post(request, response) {
		try {
			const { name, bithDate, scheduleDate } = request.body;

			const patient = {
				id: crypto.randomUUID(),
				name,
				bithDate,
				scheduleDate,
			};

			patients.push(patient);
			response.send({ message: "Patient created" });
		} catch (error) {
			response.status(500).send({ message: "Something went wrong" });
			console.log(error);
		}
	},
};

export default controller;

import patientModel from "../model/PatientModel.js";

class PatientController {
	async getAll(request, response) {
		const patients = await patientModel.find();
		response.send({ patients });
	}

	async schedule(request, response) {
		try {
			const { name, birthDate, scheduleDate } = request.body;

			const scheduleDateStart = new Date(scheduleDate.substring(0, 10));
			const scheduleDateEnd = new Date(
				scheduleDateStart.getTime() + 24 * 60 * 60 * 1000
			);

			const scheduleOnDate = await patientModel.find({
				scheduleDate: { $gte: scheduleDateStart, $lt: scheduleDateEnd },
			});

			const patient = await patientModel.create({
				name,
				birthDate,
				scheduleDate,
			});

			response.send({ message: "Patient created", patient, scheduleOnDate });
		} catch (error) {
			response.status(500).send({ message: "Something went wrong" });
			console.log(error);
		}
	}

	async update(request, response) {
		try {
			const { id } = request.params;
			const { wasVaccinated } = request.body;

			const patient = await patientModel.findByIdAndUpdate(
				id,
				{
					wasVaccinated,
				},
				{ new: true }
			);

			response.send({ message: "Patient updated", patient: patient });
		} catch (error) {
			response.status(500).send({ message: "Something went wrong" });
			console.log(error);
		}
	}
}

export default PatientController;

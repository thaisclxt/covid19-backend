import patientModel from "../model/PatientModel.js";

async function query(schedule_type, date) {
	let start;
	let end;

	if (schedule_type === "onDay") {
		start = new Date(date.substring(0, 10));
		end = new Date(start.getTime() + 24 * 60 * 60 * 1000);
	} else {
		start = new Date(date.substring(0, 13).concat(":00:00.000Z"));
		end = new Date(start.getTime() + 60 * 60 * 1000);
	}

	return await patientModel.find({ scheduleDate: { $gte: start, $lt: end } });
}

class PatientController {
	async getAll(request, response) {
		const patients = await patientModel.find();
		response.send({ patients });
	}

	async getPatientsOnDay(request, response) {
		try {
			const { day } = request.params;

			response.send({
				message: `Patients scheduled on ${day}`,
				scheduleOnDate: await query("onDay", day),
			});
		} catch (error) {
			response.status(500).send({ message: "Something went wrong" });
			console.log(error);
		}
	}

	async getPatientsOnDate(request, response) {
		try {
			const { date } = request.params;

			response.send({
				message: `Patients scheduled on ${date}`,
				scheduleOnDayAndHour: await query("onDayAndHour", date),
			});
		} catch (error) {
			response.status(500).send({ message: "Something went wrong" });
			console.log(error);
		}
	}

	async schedule(request, response) {
		try {
			const { name, birthDate, scheduleDate } = request.body;

			if ((await query("onDay", scheduleDate)).length < 20) {
				if ((await query("onHour", scheduleDate)).length < 2) {
					const patient = await patientModel.create({
						name,
						birthDate,
						scheduleDate,
					});

					response.send({ message: "Patient scheduled", patient });
				} else {
					response
						.status(422)
						.send({ message: "Limit of 2 patients per hour reached" });
				}
			} else {
				response
					.status(422)
					.send({ message: "Limit of 20 patients per day reached" });
			}
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

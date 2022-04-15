import patients from "../model/PatientModel.js";

const controller = {
	getAll(request, response) {
		response.send({ patients });
	},
};

export default controller;

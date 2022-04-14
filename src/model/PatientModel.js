import crypto from "crypto";

const patients = [
	{
		id: crypto.randomUUID(),
		name: "Thaís",
		bithDate: new Date("2000-12-07"),
		scheduleDate: new Date("2022-04-20T03:00:00"),
	},
];

export default patients;

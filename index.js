import express from "express";

const PORT = 3000;

const app = express();

app.listen();

app.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`);
});

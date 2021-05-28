import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (request, response) => {
	response.status(200).send({ message: "Hello Fat Cat!" });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is started on port: ${port}`));

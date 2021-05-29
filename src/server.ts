import express from "express";
import sequelize from "./database";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
	sequelize.authenticate();
	console.log("Connected to database.");
	sequelize.sync();
} catch (error) {
	sequelize.close();
	console.error(error);
}

app.use("/", routes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is started on port: ${port}`));

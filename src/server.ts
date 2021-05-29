import express from "express";
import sequelize from "./database";
import buildingRoutes from "./routes/buildingRoutes";
import unitRoutes from "./routes/unitRoutes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
	sequelize.authenticate();
	sequelize.sync({ force: true });
	console.log("Connected to database.");
} catch (error) {
	sequelize.close();
	console.error(error);
}

app.use("/building", buildingRoutes);
app.use("/unit", unitRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is started on port: ${port}`));

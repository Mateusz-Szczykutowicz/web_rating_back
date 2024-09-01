import express, { Request, Response } from "express";
import UserRouter from "./routes/user.router";
import config from "./config";
import morgan from "morgan";
import path from "path";

const app = express();

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/favicon.ico", (req, res) => {
    const pathToImg = path.join(__dirname, "../favicon.ico");
    res.sendFile(pathToImg);
});

app.use("/users", UserRouter);

app.use((req, res) => {
    res.status(404).json({ error: "Not found", status: 404 });
});

app.listen(config.PORT, () => {
    console.log(`Server is listening on http://localhost:${config.PORT}/`);
});

import express from "express";
import morgan from "morgan";

import languageRoutes from "./routes/language.routes";


const app=express();


app.set("port",3000);

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/languages", languageRoutes);

export default app;

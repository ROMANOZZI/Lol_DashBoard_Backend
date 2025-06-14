import { Express } from "express";
import express from "express";
const app: Express = express();
import bodyParser from "body-parser";
import cors from "cors";
import matchRoutes from "./Routes/MatchRoutes";
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/match',matchRoutes);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
export default app;
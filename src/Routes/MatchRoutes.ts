import { Express,Router } from "express";
import { matchController } from "../Controllers/matchController";

const router = Router();

router.get("/", (req, res) => matchController.getMatch(req, res));

export default router;

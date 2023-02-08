import express from "express";
import {
  addOperator,
  deleteOperator,
  getOperators,
  getOperatorsByCity,
  getOperatorsByCityAndDistrict,
} from "../controllers/Operator.js";

const router = express.Router();

router.get("/getopt", getOperators);
router.get("/getopt/:city", getOperatorsByCity);
router.get("/getopt/:city/:district", getOperatorsByCityAndDistrict);
router.post("/addopt", addOperator);
router.delete("/delopt/:id", deleteOperator);

export default router;

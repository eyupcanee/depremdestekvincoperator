import mongoose from "mongoose";

const OperatorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    max: 100,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  city: String,
  district: String,
});

const Operator = mongoose.model("Operator", OperatorSchema);
export default Operator;

import Operator from "../models/Operator.js";

export const getOperators = async (req, res) => {
  try {
    const operators = await Operator.find();

    res.status(200).json({ operators: operators });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getOperatorsByCity = async (req, res) => {
  const { city } = req.params;

  try {
    const operatorsByCity = await Operator.find({ city: city });

    res.status(200).json({ operators: operatorsByCity });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getOperatorsByCityAndDistrict = async (req, res) => {
  const { city, district } = req.params;

  try {
    const operatorsByCityAndDistrict = await Operator.find({
      city: city,
      district: district,
    });

    res.status(200).json({ operators: operatorsByCityAndDistrict });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addOperator = async (req, res) => {
  const { fullName, phoneNumber, city, district } = req.body;

  const newOperator = new Operator({
    fullName,
    phoneNumber,
    city,
    district,
  });

  try {
    await newOperator.save();

    res
      .status(200)
      .json({ message: "New Operator Added!", operator: newOperator });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteOperator = async (req, res) => {
  const { id } = req.params;

  try {
    await Operator.findByIdAndDelete(id);

    res.status(200).json({ message: `${id} Operator Have Deleted!` });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

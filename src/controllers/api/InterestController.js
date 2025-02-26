/**
 * Interest API Controller
 */

import Interest from "../../models/Interest.js";

/**
 * Get a single interest
 */
export const show = async (req, res, next) => {
  const id = req.params.id;
  const interest = await Interest.query().findById(id);

  if (!interest) {
    return res.status(404).json({ message: "Interest not found." });
  }

  return res.json(interest);
};

/**
 * Get all interests
 */
export const index = async (req, res, next) => {
  const interest = await Interest.query();
  return res.json(interest);
};

/**
 * Create a new interest
 */
export const store = async (req, res, next) => {
  try {
    const { name } = req.body;

    const interestExists = await Interest.query().findOne({ name });
    if (interestExists) {
      return res.status(400).json({ message: "Interest already exitst" });
    }
    const interest = await Interest.query().insert({ name });

    res.json({ message: "Interest Created Succesfully", interest });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

/**
 * Update an interest
 */
export const update = async (req, res, next) => {
  res.send("upadate all interest");
};

/**
 * Delete an interest
 */
export const destroy = async (req, res, next) => {
  const { id } = req.params;
  await Interest.query().deleteById(id);
  res.send(`destroy a interest with id${id}`);
};

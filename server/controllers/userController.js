// controllers/userController.js
const bcrypt = require("bcryptjs");
const { getCollection } = require("../database");

const registerUser  = async (userData) => {
  const { name, email, idNumber, password } = userData;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  const collection = getCollection();
  const newUser  = {
    name,
    email,
    idNumber,
    password: hashedPassword,
  };

  // Insert the new user into the database
  const result = await collection.insertOne(newUser );
  return result;
};

module.exports = { registerUser  };
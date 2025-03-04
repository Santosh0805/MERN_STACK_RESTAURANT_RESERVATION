import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxLength: [10, "First name cannot exceed 15 Characters."],
  },
  lastName: {
    type: String,
    required: true,
    maxLength: [15, "Last name cannot exceed 15 Characters."],
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    maxLength: [10, "Phone number must contain 10 Digits."],
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);

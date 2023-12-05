import mongoose from "mongoose";
import validator from 'validator'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide Name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please Provide Email"],
    validate: {
        validator: validator.isEmail,
        message: 'Please provide a valid email'
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Provide Password"],
    minlength: 6,

  },
  lastName: {
    type: String,
    minlength: 3,
    maxlength: 20,
    trim: true,
    default: 'Last Name'
  },
  location: {
    type: String,
    trim: true,
    maxlength: 20,
    default: 'my city'
  },
});

export default mongoose.model('User', UserSchema)
import mongoose, { Schema } from "mongoose";
import bycrpt from "bycrpt";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
    },
    watchHistory: [
      {
        type: [Schema.Types.ObjectId],
        ref: "Video",
      },
    ],
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// .pre is a method of mongoose Schema and it take two parameters the funtion are  going to apply e.g "save"
// and a callback function but there we don't use ()=>{} because of this property
userSchema.pre("save", async function (next) {
  // this code will run everytime when a change is made in any feild of the schema to tackle this issue we need a coditional statement

  // is there is no change in the password then retuns next()
  if (!this.isModified("password")) return next();

  // here we user bycrpy to encrpt the password
  this.password = await bycrpt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bycrpt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullName: this.fullName,
    },
    process.env.ACCESS_TOKKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKKEN_EXPIRY,
    }
  );
};
userSchema.methods.generateRefreshToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);

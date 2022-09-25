const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const {attachCookiesToResponse, createTokenUser,} = require("../utils");

const register = async (req, res) => {
  const { email, name, password } = req.body;

  const emailAlreadyExists = await User.findOne({ email });

  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError("Email already exist");
  }
  //first registered user is an admin
  const isFirstAccount = (await User.countDocuments({})) === 0;
  const role = isFirstAccount ? "admin" : "user";

  const user = await User.create({ email, name, password, role });
  const tokeunUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokeunUser });
  res.status(StatusCodes.CREATED).json({ user: tokeunUser });
};
const login = async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !password) {
    throw new CustomError.BadRequestError(" Please provide email and password");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new CustomError.UnauthenticatedError("Invalid Credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError("Invalid Credentials");
  }

  const tokeunUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokeunUser });
  res.status(StatusCodes.OK).json({ user: tokeunUser });
};
const logout = async (req, res) => {
  res.cookie("token", "logout",{
    httpOnly:true,
    expires: new Date(Date.now())
  })
  res.status(StatusCodes.OK).json({msg:"User logged out"})
};

module.exports = { register, login, logout };

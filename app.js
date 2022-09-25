require("dotenv").config();
require("express-async-errors");

//EXPRESS
const express = require("express");
const app = express();

//rest of the pakages
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileupload = require("express-fileupload")
const rateLimiter = require("express-rate-limit")
const helmet = require("helmet")
const xss = require("xss-clean")
const mongoSanitize = require("express-mongo-sanitize")

//db
const connectDb = require("./db/connect");

//routers
const authRouter = require("./routes/authRoutes.js");
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes")
const reviewRouter = require("./routes/reviewRoutes")
const orderRouter = require("./routes/orderRoutes")

//middleware
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");
const { application } = require("express");


app.set("trust proxy",1);
app.use(rateLimiter({
  windowMs:15*60*1000,
  max:60
}))

app.use(helmet());
app.use(cors());
app.use(xss());
app.use(mongoSanitize());


app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));
app.use(express.static("./public"))
app.use(fileupload())





app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users",userRouter);
app.use('/api/v1/products', productRouter)
app.use('/api/v1/reviews', reviewRouter)
app.use("/api/v1/orders",orderRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Server listening on port ${port}`));
  } catch (error) {}
};

start();
console.log("E-Commerce API");

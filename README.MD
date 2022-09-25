## Hosted Project

[E-Commerce API Heroku URL](https://npm e-commerce-api-10.herokuapp.com/)

#### Setup Basic Express Server

- [x] import express and assign to variable
- [x] setup start port variable (5000) and start function

#### Connect To DB

- [x] get connection string
- [x] setup .env with MONGO_URL variable and assign the value
- [x] import 'dotenv' and setup package
- [x] import connect() and invoke in the starter
- [x] restart the server
- [x] mongoose V6 info

#### Basic Routes and Middleware

- [x] setup / GET Route
- [x] setup express.json() middleware
- [x] setup 404 and errorHandler middleware
- [x] import 'exress-async-errors' package

#### 404 vs ErrorHandler Middleware

#### Morgan Pacakge

- [Morgan Package](https://www.npmjs.com/package/morgan)

#### User Model

- [x] create models folder and User.js file
- [x] create schema with name,email, password (all type:String)
- [x] export mongoose model

#### Validator Package

- [Validator](https://www.npmjs.com/package/validator)

#### Auth Routes Structure

- [x] create controllers folder
- [x] add authController file
- [x] export (register,login,logout) functions
- [x] res.send('some string value')
- [x] create routes folder
- [x] setup authRoutes file
- [x] import all controllers
- [x] setup three routes
- [x] post('/register') post('/login') get('/logout')
- [x] import authRoutes as authRouter in the app.js
- [x] setup app.use('/api/v1/auth', authRouter)

#### Test Routes in Postman

#### Register Controller

- [x] create user
- [x] send response with entire user (only while testing)
- [x] check if email already in use (schema and controller)
- [x] ignore 'role'
- [x] alternative 'admin' setup

#### Handle Password

- [x] UserSchema.pre('save') - hook
- this points to User
- bcrypt.genSalt - number of rounds
- bcrypt.hash

#### JWT

- [x] require 'jsonwebtoken' package
- [x] create jwt - jwt.sign(payload,secret,options)
- [x] verify jwt - jwt.verify(token,secret)
- [x] add variables in .env JWT_SECRET=jwtSecret and JWT_LIFETIME=1d
- [x] restart the server !!!!
- [x] refactor code, create jwt functions in utils
- [x] refactor cookie code
- [x] setup func attachCookiesToResponse
- [x] accept payload(res, tokenUser)
- [x] create token, setup cookie
- [x] optionally send back the response

#### Login Route

- [x] check if email and password exist, if one missing return 400
- [x] find user, if no user return 401
- [x] check password, if does not match return 401
- [x] if everything is correct, attach cookie
  and send back the same response as in register

#### Logout Route

- [x] set token cookie equal to some string value
- [x] set expires:new Date(Date.now())

#### User Routes Structure

- [x] add userController file
- [x] export (getAllUsers,getSingleUser,showCurrentUser,updateUser,updateUserPassword) functions
- [x] res.send('some string value')
- [x] setup userRoutes file
- [x] import all controllers
- [x] setup just one route - router.route('/').get(getAllUsers);
- [x] import userRoutes as userRouter in the app.js
- [x] setup app.use('/api/v1/users', userRouter)

#### GetAllUsers and GetSingleUser

- [x] Get all users where role is 'user' and remove password
- [x] Get Single User where id matches id param and remove password
- [x] If no user 404

#### Authenticate User Setup

#### Auth User Complete

#### Authorize Permissions Setup

- [] hardcode

#### Authorize Permissions Complete

- [] introduce params

#### ShowCurrentUser

- [x] get user from req
- [x] send response with user

#### UpdateUserPassword

- [x] almost identical to login user
- [x] add authenticateUser middleware in the route
- [x] check for oldPassword and newPassword in the body
- [x] if one missing 400
- [x] look for user with req.user.userId
- [x] check if oldPassword matches with user.comparePassword
- [x] if no match 401
- [x] if everything good set user.password equal to newPassword
- [x] await user.save()

#### createTokenUser in Utils

- [x] create a file in utils (createTokenUser)
- [x] setup a function that accepts user object and returns userToken object
- [x] export as default
- [x] setup all the correct imports/exports and refactor existing code

#### updateUser with User.findOneAndUpdate()

- [x] add authenticateUser middleware in the route
- [x] check for name and email in the body
- [x] if one is missing, send 400 (optional)
- [x] use findOneAndUpdate()
- [x] create token user, attachCookiesToResponse and send back the tokenUser

#### updateUser with user.save()

#### Setup and Apply checkPermissions()

#### Product Model

- [X] create Product.js in models folder
- [X] create Schema
- [X] name : {type:String}
- [X] price: {type:Number}
- [X] description: {type:String}
- [X] image: {type:String}
- [X] category: {type:String}
- [X] company: {type:String}
- [X] colors: {type:[]}
- [X] featured: {type:Boolean}
- [X] freeShipping: {type:Boolean}
- [X] inventory:{type:Number}
- [X] averageRating:{type:Number}
- [X] user
- [X] set timestamps
- [X] export Product model

#### Product Structure

- [x] add productController file in controllers
- [x] export (createProduct, getAllProducts,
  getSingleProduct, updateProduct, deleteProduct, uploadImage) functions
- [x] res.send('function name')
- [x] setup productRoutes file in routes
- [x] import all controllers
- [x] only getAllProducts and getSingleProduct accessible to public
- [x] rest only by admin (setup middlewares)
- [x] typical setup
- [x] router.route('/uploadImage').post(uploadImage)
- [x] import productRoutes as productRouter in the app.js
- [x] setup app.use('/api/v1/products', productRouter)

#### Product Routes in Postman

#### Create Product

- [x] create user property on req.body and set it equal to userId (req.user)
- [x] pass req.body into Product.create
- [x] send back the product

#### Remaining Controllers (apart from uploadImage)

- [x] getAllProducts
- [x] getSingleProduct
- [x] updateProduct
- [x] deleteProduct
- [x] typical CRUD, utilize (task or job) project
- [x] remember we check already for role 'admin'

#### Upload Image

- [x] if some question, re-watch 07-file-upload
- [x] images folder with two images

#### Review Model

- [x] create Review.js in models folder
- [x] create Schema
- [x] rating : {type:Number}
- [x] title: {type:String}
- [x] comment: {type:String}
- [x] user
- [x] product
- [x] set timestamps
- [x] export Review model

#### Review Structure

- [x] add reviewController file in controllers
- [x] export (createReview, getAllReviews, getSingleReview, updateReview, deleteReview) functions
- [x] res.send('function name')
- [x] setup reviewRoutes file in routes
- [x] import all controllers
- [x] only getAllReviews and getSingleReview accessible to public
- [x] rest only to users (setup middleware)
- [x] typical REST setup
- [x] import reviewRoutes as reviewRouter in the app.js
- [x] setup app.use('/api/v1/reviews', reviewRouter)

#### Create Review

- [x] check for product in the req.body
- [x] attach user property (set it equal to req.user.userId) on to req.body
- [x] create review
- [x] don't test yet

#### Get All Reviews and Get Single Review

- [x] both public routes, typical setup

#### Delete Review

- [x] get id from req.params
- [x] check if review exists
- [x] if no review, 404
- [x] check permissions (req.user, review.user)
- [x] use await review.remove()
- [x] send back 200

#### Update Review

- [x] get id from req.params
- [x] get {rating, title comment} from req.body
- [x] check if review exists
- [x] if no review, 404
- [x] check permissions
- [x] set review properties equal to rating, title, comment
- [x] use await review.save()
- [x] send back 200

#### Populate

#### Virtuals

#### Get Single Product Reviews

#### Remove All Reviews

#### Aggregation Pipeline - Atlas and Code

#### Order Schema

- [x] create Order.js in models folder
- [x] create Schema
- [x] tax : {type:Number}
- [x] shippingFee: {type:Number}
- [x] subtotal: {type:Number}
- [x] total: {type:Number}
- [x] orderItems:[]
- [x] status:{type:String}
- [x] user
- [x] clientSecret:{type:String}
- [x] paymentId:{type:String}
- [x] set timestamps
- [x] export Order model

#### Order Structure

- [x] add orderController file in controllers
- [x] export (getAllOrders, getSingleOrder, getCurrentUserOrders,
  createOrder, updateOrder) functions
- [x] res.send('function name')
- [x] setup orderRoutes file in routes
- [x] import all controllers
- [x] authenticate user in all routes
- [x] getAllOrders admin only
- [x] typical REST setup
- [x] router.route('/showAllMyOrders').get(getCurrentUserOrders)
- [x] import orderRoutes as orderRouter in the app.js
- [x] setup app.use('/api/v1/orders', orderRouter)

#### Order in Postman

#### Create Order

- [x] most complex

#### Get All Orders and Get Single Order

- [x] getAllOrders - admin only
- [x] getSingleOrder - chechPermissions

#### Get Current User Orders

- [x] find orders where user is equal to req.user.userId

#### Update Order

- [x] get order id
- [x] get paymentIntentId (req.body)
- [x] get order
- [x] if does not exist - 404
- [x] check permissions
- [x] set paymentIntentId and status as 'paid'
- [x] order.save()

#### Create Docs

- [x] [Docgen Library] (https://github.com/thedevsaddam/docgen)
- [x] Export Postman Collection
- [x] docgen build -i fileName.json -o index.html
- [x] create index.html in public

#### Security Packages

- [x] express-rate-limiter
- [x] helmet
- [x] xss-clean
- [x] express-mongo-sanitize
- [x] cors (cookies!!!!)

#### Deploy on Heroku

- [x] heroku account and heroku cli
- [] remove/copy from the main repo
- [] add dev command "nodemon app.js"
- [] change start to "node app.js"
- [] setup node version in package.json
- [] "engines": {"node": "14.x"}
- [] Procfile "web: node app.js"
- [] remove existing git repo
- [] rm -rf .git - mac,
- [] git init
- [] git add .
- [] git commit -m "initial commit"
- [] heroku login
- [] heroku create "App Name"
- [] git remote -v
- [] setup env vars in GUI
- [] git push heroku master/main

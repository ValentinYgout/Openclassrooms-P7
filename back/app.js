const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('dotenv').config();
const path = require('path');
const mongoose = require('mongoose');
const mongoSanitize = require('express-mongo-sanitize');
const { expressjwt: jwt } = require("express-jwt");
var jwks = require('jwks-rsa');
const jwtAuthz = require('express-jwt-authz')

// const checkPermissions =jwtAuthz("write:post")


app.use(mongoSanitize());

// DB connection
mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@vycluster.hpqa3.mongodb.net/P7?retryWrites=true&w=majority`, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
.then(() => console.log('connected to mongoDB'))
.catch(() => console.log('failed to connect to mongoDB'));

// Apply the rate limiting middleware to all requests
const rateLimit = require('express-rate-limit')
app.use(rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
}));

// Apply helmet
const helmet = require("helmet");
app.use(helmet({ crossOriginResourcePolicy: { policy: "same-site" } }));

// Cors
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
	next();
});

const jwtCheck= jwt({
	secret: jwks.expressJwtSecret({
	  cache: true,
	  rateLimit: true,
	  jwksRequestsPerMinute: 5,
	  jwksUri: 'https://dev-5bvir81f.us.auth0.com/.well-known/jwks.json'
	}),
	audience: 'http://localhost:3500/api/',
	issuer: 'https://dev-5bvir81f.us.auth0.com/',
	algorithms: ['RS256']
  }).unless({path:[new RegExp('/images/*/', 'i') ]});
 

app.use(jwtCheck)


// const userRoutes = require('./routes/user');
const PostRoutes = require("./routes/post");
// app.use('/api/auth', userRoutes);
app.use("/api/post", PostRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));




module.exports = app;

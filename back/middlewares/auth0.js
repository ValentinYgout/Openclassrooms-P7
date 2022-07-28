// const jwt= require('express-jwt')
// const jwks=require('jwks-rsa')
// const axios = require ('axios')

// module.exports = (req, res, next) => {
//   try {
   
//     const jwtCheck= jwt({
//       secret: jwks.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         jwksUri: 'https://dev-5bvir81f.us.auth0.com/.well-known/jwks.json'
//       }),
//       audience: 'http://localhost:3500/api/',
//       issuer: 'https://dev-5bvir81f.us.auth0.com/',
//       algorithms: ['RS256']
//     });
//     if (!jwtCheck) {
//       throw 'Invalid check'; } else {
//       next();
//     }
//   } catch {
//     res.status(401).json({
//       error: new Error('Invalid request!')
//     });
//   }
// };




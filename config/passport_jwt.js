// importing all required packages 
const Doctor = require("../models/doctor");
const passport = require("passport");
// importing passport jwt for log in docters
const JwtStrategy = require("passport-jwt").Strategy;
ExtractJwt = require("passport-jwt").ExtractJwt;

var opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "secretkey",
};

passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    console.log("payload", jwt_payload);
     Doctor.findOne({ id: jwt_payload.sub }, function (err, doctor) {
      if (err) {
        return done(err, false);
      }
      if (doctor) {
        return done(null, doctor);
      } else {
        return done(null, false);
      }
    });
  })
);

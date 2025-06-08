const passport = require("passport");
const bcrypt = require("bcrypt");

const register = async (request, response, next) => {
  const { firstName, lastName, username, password, googleId } = request.body;

  if(error){
    return next(error)
  } else if(!firstName || !username || !password ){
    return response.status(400).json({
      error: {message: "Missing required field."},
      statuscode: 400,
    })
  };

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: hashedPassword,
      googleId: googleId,
    };

    await newUser.save();

    request.login(() =>{
      if(error){
        return next(error);
      }

      newUser.password = undefined;


      response.status(201).json({
      success: { message: "New user is created" },
      data: { user: newUser },
      statuscode: 201,
    });
    })
  } catch(error) {
    return next(error)
  }
};

const login = async (request, response, next) => {
  response.status(200).json({
    success: { message: "User logged in." },
  });
};

const logout = (request, response, next) => {

  request.logout((error) => {
    if(error){
      return next(error);
    }

    request.session.destroy(error => {
      if(error){
        return next(error);
      }

      response.clearCookie("connection.sid")
      return response.status(200).json({
        success: { message: "Logged out successful" },
        statuscode: 200,
      })
    })
  });
  // console.log("Initializing logout controller logic...");

  // response.clearCookie("connect.sid");

  // response.status(200).json({
  //   success: { message: "User logging out." },
  // });

  // function sessionDestruction(err) {
  //   if (err) {
  //     return next(err);
  //   }
  // }
  // sessionDestruction();

  // console.log("Logout function activated. Logging out...");
};

const localLogin = async (request, response, next) => {
   passport.authenticate("local", (error, user, info) => {
    if(error){
      return next(error);
    };

    if(!user){
      return response.status(401).json({
        error: { message: info.message},
      });
    }

    request.login(user, (error) => {
      if(error){
        return next(error)
      }

  const userCopy = { ...request.user._doc };
  userCopy.password = undefined;
    })

    response.status(200).json({
      success: { message: "Login Successful with local authentication."},
       data: { user, userCopy },
       statuscode: 201,
    result,
    })
  });
};

module.exports = { register, login, localLogin, logout };
const register = async (request, response, next) => {
  const { firstName, lastName, userName, password } = request.body;

  try {
    const newUser = {
      firstName,
      lastName,
      username,
      password,
    };
    console.log("code is operational");
    response.status(201).json({
      success: { message: "New user is created" },
      data: { newUser },
      statuscode: 201,
    });
  } catch(error) {
    response.status(500).json({
      error: { message: "Internal server error!" },
    });
  }
};

const login = async (request, response, next) => {
  response.status(200).json({
    success: { message: "User logged in." },
  });
};

const logout = (request, response, next) => {
  console.log("Initializing logout controller logic...");

  response.clearCookie("connect.sid");

  response.status(200).json({
    success: { message: "User logging out." },
  });

  function sessionDestruction(err) {
    if (err) {
      return next(err);
    }
  }
  sessionDestruction();

  console.log("Logout function activated. Logging out...");
};

const localLogin = async (request, response, next) => {
  let result = true;

  function mockPassport(err, user) {
    //error handling as a final check and a failsafe
    if (err) {
      return next(err);
    }
  }
  //call the mockPassport feature
  mockPassport();

  response.status(200).json({
    success: { message: "Login Successful" },
    data: { user, userCopy },
    result,
  });
};

module.exports();
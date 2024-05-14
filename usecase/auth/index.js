const bcrypt = require("bcrypt");
const {
  createUser,
  getUserByEmail,
  getUserByID,
  getGoogleAccessTokenData,
} = require("../../repository/user");
const { createToken } = require("./util");

exports.register = async (payload) => {
  let user = await createUser(payload);

  // Delete object password from user
  delete user?.dataValues?.password;

  // return the user data and the token
  const data = createToken(user);

  return data;
};

exports.login = async (email, password) => {
  // get the user
  let user = await getUserByEmail(email);
  if (!user) {
    throw new Error(`User is not found!`);
  }

  // compare the password
  const isValid = await bcrypt.compare(password, user?.password);
  if (!isValid) {
    throw new Error(`Wrong password!`);
  }

  // delete password
  if (user?.dataValues?.password) {
    delete user?.dataValues?.password;
  } else {
    delete user?.password;
  }

  // return the user data and the token
  const data = createToken(user);

  return data;
};

exports.profile = async (id) => {
  // get the user
  let data = await getUserByID(id);
  if (!data) {
    throw new Error(`User is not found!`);
  }

  // delete password
  if (data?.dataValues?.password) {
    delete data?.dataValues?.password;
  } else {
    delete data?.password;
  }

  return data;
};

exports.googleLogin = async (accessToken) => {
  // validate the token and get the data from google
  const googleData = await getGoogleAccessTokenData(accessToken);

  // Create new user based on google data that get by access_token
  const user = await createUser({
    email: googleData?.email,
    password: "",
    name: googleData?.given_name,
    photo: googleData?.picture,
    role: "admin",
  });

  // Delete object password from user
  delete user?.dataValues?.password;

  // create token
  const data = createToken(user);

  return data;
};

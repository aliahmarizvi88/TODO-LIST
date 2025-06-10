const User = require('../models/user');
const argon2 = require('argon2');
const { setUser } = require('../Services/UserService');

const handleUserSignUp = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashPassword = await argon2.hash(password);

    const newUser = await User.create({ name, email, password: hashPassword });

    const token = setUser(newUser);

    res.cookie('uid', token, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/user',
    });
    return res.status(200).json({
      message: 'user created successfully',
      username: newUser.name,
      user_email: newUser.email,
      userID: newUser._id,
      Token: token,
    });
  } catch (error) {
    console.error('Signup error:', error);
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    return res
      .status(500)
      .json({ message: `Internal Server error: ${error.message}` });
  }
};

const handleUserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userLogin = await User.findOne({ email });

    const validPassword = argon2.verify(userLogin.password, password);

    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = setUser(userLogin);
    res.cookie('uid', token, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
    });
    return res.status(202).json({
      message: 'Login Sucessfull',
      username: userLogin.name,
      user: userLogin.email,
      token: token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: `Internal Server Error, ${error}` });
  }
};

const handleLogout = (req, res) => {
  res.clearCookie('uid');
  res.json({ message: 'Logged out sucessfully' });
};
module.exports = {
  handleUserSignUp,
  handleUserLogin,
  handleLogout,
};

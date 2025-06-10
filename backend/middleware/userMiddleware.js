const { getUser } = require('../Services/UserService');

const restrictToLoginUserOnly = (req, res, next) => {
  const userUid = req.cookies && req.cookies.uid;

  if (!userUid) return res.status(401).json({ message: 'Unauthorized' });
  const user = getUser(userUid);

  if (!user) return res.status(401).json({ error: 'Unauthorized' });
  req.user = user;

  next();
};

module.exports = { restrictToLoginUserOnly };

const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);
  const user = await User.create({
    email: req.body.email,
    password: hashed,
    role: req.body.role || "user",
  });
  res.json(user);
};

exports.login = async (req, res) => {
  let user = await User.findOne({ where: { email: req.body.email } });

  // DEV AUTO-CREATE USER
  if (!user) {
    const hashed = await bcrypt.hash("demo123", 10);
    user = await User.create({
      email: "demo@gov.in",
      password: hashed,
      role: "user",
    });
  }

  const match = await bcrypt.compare(req.body.password, user.password);
  if (!match) return res.status(401).json({ msg: "Wrong password" });

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET || "devsecret",
    { expiresIn: "7d" }
  );

  res.json({ token });
};

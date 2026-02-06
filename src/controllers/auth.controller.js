const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    let user = await User.findOne({ where: { email: req.body.email } });

    // DEV AUTO-USER
    if (!user) {
      const hashed = await bcrypt.hash("demo123", 10);
      user = await User.create({
        email: "demo@gov.in",
        password: hashed,
        role: "user",
      });
    }

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      return res.status(401).json({ msg: "Wrong password" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET || "devsecret",
      { expiresIn: "7d" }
    );

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Login error" });
  }
};

const jwt = require("jsonwebtoken");

/**
 * TEMP DEMO LOGIN
 * Email: demo@gov.in
 * Password: demo123
 */
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (email === "demo@gov.in" && password === "demo123") {
    const token = jwt.sign(
      { id: 1, role: "user" },
      process.env.JWT_SECRET || "demo_secret_123",
      { expiresIn: "1d" }
    );

    return res.json({ token });
  }

  return res.status(401).json({ msg: "Invalid credentials" });
};

/**
 * Disabled register for now
 */
exports.register = async (req, res) => {
  return res.status(403).json({
    msg: "Registration disabled for demo",
  });
};

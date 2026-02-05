exports.login = async (req, res) => {
  let user = await User.findOne({ where: { email: req.body.email } });

  // 🔥 AUTO-CREATE USER IF NOT EXISTS (DEV ONLY)
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
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({ token });
};

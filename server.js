const app = require("./src/app");
const cors = require("cors");

// ✅ ENABLE CORS (THIS IS THE MISSING LINK)
app.use(cors({
  origin: "*"
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

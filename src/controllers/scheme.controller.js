exports.getAllSchemes = async (req, res) => {
  res.json([
    {
      id: 1,
      name: "PM Kisan Yojana",
      description: "₹6000 yearly support for farmers",
    },
    {
      id: 2,
      name: "Ayushman Bharat",
      description: "Free health insurance up to ₹5 lakh",
    },
    {
      id: 3,
      name: "Skill India",
      description: "Skill training and employment support",
    },
  ]);
};


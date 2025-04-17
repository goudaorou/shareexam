const express = require("express");
const path = require("path");
const { getepreuve, setpost, setedit, delect } = require("../controllers/epreuvecontroller");
const { protect, isProf } = require("../middleware/authmiddleware");
const upload = require("../middleware/upload");

const router = express.Router();


router.get("/", getepreuve);


router.post("/", protect, isProf, upload.single("fichier"), setpost);


router.put("/:id", protect, isProf, upload.single("fichier"), setedit);


router.delete("/:id", protect, isProf, delect);


router.get("/download/:filename", (req, res) => {
  const filePath = path.join(__dirname, "../uploads", req.params.filename);
  res.download(filePath, (err) => {
    if (err) {
      res.status(404).json({ message: "Fichier introuvable" });
    }
  });
});

module.exports = router;

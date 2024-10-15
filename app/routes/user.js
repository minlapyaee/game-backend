const { Router } = require("express");
const {
    create_user,
    create_audit,
    fetch_audit,
    fetch_leaderboard
  } = require("../controllers/users.controller");

const router = Router();

router.post("/create_user", create_user);
router.post("/create_audit", create_audit);
router.get("/fetch_audit", fetch_audit);
router.get("/fetch_leaderboard", fetch_leaderboard);

module.exports = router;
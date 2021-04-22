const router = require("express").Router();
const verify = require("./verifyToken"); // use middleware


router.get("/", verify, (req, res) => {
    res.json({ posts: { title: "my first post", description: "im going to zhuhai yes" } })
});




module.exports = router
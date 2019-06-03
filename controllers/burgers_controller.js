const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.list(function(data) {
        const sqlData = { burgers: data };
        res.render("index", sqlData);
    });
});

router.post("/api/burger", function(req, res) {
    burger.add(req.body.name, function(result) {
        res.json({ id: result.id });
    });
});

router.put("/api/burger/:id", function(req, res) {
  burger.munch(req.params.id, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;

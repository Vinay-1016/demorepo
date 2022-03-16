const express = require("express");
const Mobile = require("../models/mobile");
const router = new express.Router();


router.post("/register", async (req, res) => {
  const mobile = new Mobile(req.body);
  try {
    await mobile.save();
    res.status(200).send({ mobile });
  } catch (e) {
    res.status(400).send();
  }
});

router.get("/allusers", async (req, res) => {
  try {
    const mobileUsers = await Mobile.find({});
    res.status(200).send(mobileUsers);
  } catch (error) {
    res.status(401).send();
  }
});

router.get("/allusers/:mobilenumber", async (req, res) => {
  const mobile = req.params.mobilenumber;

  try {
    if (mobile.length !== 10) {
      throw new Error();
    }
    const MobileDetails = await Mobile.findOne({
      mobile: mobile,
    });
    res.status(200).send(MobileDetails);
  } catch (e) {
    res.status(401).send({ error: "Please Enter Valid Mobile Number!" });
  }
});

module.exports = router;

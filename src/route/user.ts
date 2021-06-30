import express from "express";
import jwt from "jsonwebtoken";
import passport from "../lib/security";

const router = express.Router();

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res, next) => {
    const user = req.user;
    const token = jwt.sign({ user: user }, process.env.JWT_SECRET as string, {
      expiresIn: 60,
    });
    res.json({ user, token });
  }
);

export default router;

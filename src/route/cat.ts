import { Router } from "express";
import passport from "../lib/security";

const router = Router();

router.get("/public", (req, res, next) => {
  res.json("public cat");
});

router.get(
  "/private",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.json("private cat");
  }
);

export default router;

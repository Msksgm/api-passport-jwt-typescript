import express from "express";
import cookieParser from "cookie-parser";

import passport from "./lib/security";

import catRouter from "./route/cat";
import userRouter from "./route/user";
import dogRouter from "./route/dog";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(passport.initialize());
app.use("/cat", catRouter);
app.use("/user", userRouter);
app.use("/dog", passport.authenticate("jwt", { session: false }), dogRouter);

app.listen(3000, () => {
  console.log("listen to " + 3000);
});

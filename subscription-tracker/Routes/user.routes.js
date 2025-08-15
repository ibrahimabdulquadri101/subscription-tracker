import { Router } from "express";
import { getUsers, getUser } from "../controllers/user.controller.js";
import authorise from "../middlewares/auth.middleware.js";
import arcjetMiddleware from "../middlewares/arcjet.middleware.js";
const userRouter = Router();
userRouter.get("/",arcjetMiddleware, getUsers);
userRouter.get("/:id", authorise, getUser);
userRouter.post("/", (req, res) => {
  res.send({
    title: "Create user",
  });
});
userRouter.put("/:id", (req, res) => {
  res.send({
    title: "Edit users",
  });
});
userRouter.delete("/:id", (req, res) => {
  res.send({
    title: "Delete users",
  });
});
export default userRouter;

import { Router } from "express";
import {
  createSubscription,
  getUserSubscription,
} from "../controllers/subscription.controller.js";
import authorise from "../middlewares/auth.middleware.js";
const subscriptionRouter = Router();
subscriptionRouter.get("/", (req, res) => {
  res.send("Hey");
});
subscriptionRouter.get("/:id", (req, res) => {
  res.send({
    title: "GET all subscription",
  });
});
subscriptionRouter.post("/", authorise, createSubscription);
subscriptionRouter.put("/:id", (req, res) => {
  res.send({
    title: "GET all subscription",
  });
});
subscriptionRouter.delete("/:id", (req, res) => {
  res.send({
    title: "GET all subscription",
  });
});
subscriptionRouter.get("/user/:id", authorise, getUserSubscription);
subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({
    title: "GET all subscription",
  });
});
subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({
    title: "GET all subscription",
  });
});

export default subscriptionRouter;

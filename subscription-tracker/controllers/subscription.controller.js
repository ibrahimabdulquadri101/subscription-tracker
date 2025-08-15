import Subscription from "../models/subscription.model.js";
import { workflow } from "../config/upstash.js";
import { SERVER_URL } from "../config/env.js";
export const createSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.create({
      ...req.body,
      userId: req.user._id,
    });
    const {workflowRunId} = await workflow.trigger({
      url: `${SERVER_URL}/api/v1/workflow/subscription/reminder`,
      body: {
        subscriptionId: subscription.id,
      },
      headers: {
        "content-type": "application/json",
      },
      retries: 0,
    });
    res.status(200).json({
      success: true,
      data: {subscription,workflowRunId}
    });
  } catch (error) {
    next(error);
  }
};
export const getUserSubscription = async (req, res, next) => {
  try {
    if (req.user.id != req.params.id) {
      const error = new Error("You are not the owner of this account");
      error.status(401);
      throw error;
    }
    const subscriptions = await Subscription.find({ userId: req.params.id });
    res.status(201).json({ success: true, data: subscriptions });
  } catch (error) {
    next(error);
  }
};

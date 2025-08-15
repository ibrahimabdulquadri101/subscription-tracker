import { Client as workflowClient } from "@upstash/workflow";
import { QSTASH_TOKEN, QSTASH_URL } from "../config/env.js";
export const workflow = new workflowClient({
  token: QSTASH_TOKEN,
  baseUrl: QSTASH_URL,
});

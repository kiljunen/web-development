import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as visits from "./visits.js";

const app = new Hono();

app.get("/feedbacks/:i", async (c) => {
  const i = c.req.param("i");
  const feedback = await visits.getFeedback(i);
  return c.text(`Feedback ${i}: ${feedback}`);
});

app.post("/feedbacks/:i", async (c) => {
    const i = c.req.param("i");
    await visits.incrementFeedback(i);
    return null
  });

export default app;

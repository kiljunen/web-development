const getFeedback = async (i) => {
    const kv = await Deno.openKv();
    const feedbacks = await kv.get(["feedbacks", i]);
    return feedbacks.value ?? 0;
  }

const incrementFeedback = async (i) => {
    const kv = await Deno.openKv();
    const feedbacks = await kv.get(["feedbacks", i]);
    await kv.set(["feedbacks", i], feedbacks.value ? feedbacks.value + 1 : 1);
  }

export { getFeedback, incrementFeedback };

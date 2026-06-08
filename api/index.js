import app from "../server/app.js";

const port = Number(process.env.PORT || 5000);

if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Portfolio API running at http://127.0.0.1:${port}`);
  });
}

export default app;

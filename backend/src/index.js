// Disable SSL verification for testing only (optional)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import express from "express";
import cors from "cors";
import feedRoute from "./routes/feedRoute.js";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Mount the route
app.use("/api/feeds", feedRoute);

// Default route (optional)
app.get("/", (req, res) => {
  res.send("✅ Umrah & Hajj News API is running...");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

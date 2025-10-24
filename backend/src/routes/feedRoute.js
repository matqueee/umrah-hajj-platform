import express from "express";
import Parser from "rss-parser";

const router = express.Router();
const parser = new Parser({
  timeout: 10000,
  headers: { "User-Agent": "Mozilla/5.0" }
});

// Keywords related to your client’s domain
const SEARCH_KEYWORDS = [
  "hajj news pakistan",
  "umrah news pakistan",
  "saudi visa pakistan",
  "hajj visa updates",
  "umrah travel pakistan"
];

// Function to generate Google News RSS URLs dynamically
const buildGoogleRSS = (query) =>
  `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=en-PK&gl=PK&ceid=PK:en`;

router.get("/", async (req, res) => {
  try {
    const allItems = [];

    for (const query of SEARCH_KEYWORDS) {
      const url = buildGoogleRSS(query);
      try {
        const feed = await parser.parseURL(url);
        const items = feed.items.map((item) => ({
          title: item.title,
          link: item.link,
          source: feed.title,
          pubDate: item.pubDate,
          description: item.contentSnippet || item.content,
        }));
        allItems.push(...items);
      } catch (err) {
        console.warn(`⚠️ Failed to fetch feed for query "${query}": ${err.message}`);
      }
    }

    if (allItems.length === 0) {
      return res.status(500).json({ error: "No feeds available." });
    }

    res.json(allItems);
  } catch (err) {
    console.error("❌ Error fetching feeds:", err.message);
    res.status(500).json({ error: "Failed to fetch feeds" });
  }
});

export default router;

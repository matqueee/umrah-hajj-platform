const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000/api";

export async function fetchFeeds() {
  const res = await fetch(`${API_BASE}/feeds`);
  if (!res.ok) throw new Error("Failed to fetch feeds");
  return res.json();
}

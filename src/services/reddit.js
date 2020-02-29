export async function getAll() {
  const res = await fetch("https://api.reddit.com/r/all?limit=100");
  return await res.json();
}

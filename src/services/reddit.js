export async function getAll() {
  const res = await fetch("https://api.reddit.com/r/all");
  return await res.json();
}

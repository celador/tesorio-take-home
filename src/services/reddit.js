export async function getAll() {
  const res = await fetch("https://api.reddit.com/r/all");
  return await res.json();
}

export async function get(permalink) {
  const res = await fetch(`https://api.reddit.com/${permalink}`);
  return await res.json();
}

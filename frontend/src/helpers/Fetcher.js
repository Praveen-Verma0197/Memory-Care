export const Fetcher = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to load new jokes !");
    const data = await res.json();
    return data;
  } catch (error) {
    alert(error);
  }
};

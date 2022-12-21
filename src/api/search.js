export const searchForText = (text) =>
  fetch("http://185.146.3.215:4000/api/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

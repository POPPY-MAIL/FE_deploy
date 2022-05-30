export const RefreshRequest = (res, refresh) => {
  fetch("https://poppymail.shop/api/token/refresh/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      refresh: refresh,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      localStorage.setItem("access", res.access);
    });
};

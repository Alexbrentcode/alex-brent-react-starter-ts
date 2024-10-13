const getData = async () => {
  const data = await fetch("https://expenses-backend-mu.vercel.app/expenses", {
    headers: {
      "Content-Type": "application/json",
      Username: "alex.brent",
    },
  });

  return data.json();
};

export default getData;
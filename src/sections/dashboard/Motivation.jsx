import React from "react";

const Motivation = () => {
  const options = { method: "GET", body: "{}" };
  fetch(
    "https://indian-quotes-api.vercel.app/api/quotes?page=1&limit=10&author=Ratan%20Tata&company=Tata",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  return (
    <div className="motivation bg-yellow-100 p-4 rounded-lg shadow dashboard-card-box">
      <h3 className="font-bold mb-2 text-yellow-800 text-xl font-[Poppins] flex items-center gap-2">
        💪 Motivation
      </h3>
      <textarea
        className="w-full p-2 rounded border border-yellow-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none font-[Poppins] text-lg"
        placeholder="Write your motivation..."
        rows="4"
      />
    </div>
  );
};

export default Motivation;

// const options = {method: 'GET', body: '{}'};
// fetch('https://indian-quotes-api.vercel.app/api/quotes?page=1&limit=10&author=Ratan%20Tata&company=Tata', options)
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));

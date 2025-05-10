import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const Motivation = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = useCallback(async () => {
    const options = {
      method: "GET",
      url: "https://stoicism-api.p.rapidapi.com/api/random_quote",
      headers: {
        "X-RapidAPI-Key": "9477a275e8mshaea7fb8d9b8f72cp17c948jsn1fbb7ad73afa",
        "X-RapidAPI-Host": "stoicism-api.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log("Quote API Response:", response.data);
      setQuote(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setError("Failed to load quote..");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  return (
    <div className="motivation bg-yellow-100 p-4 rounded-lg shadow dashboard-card-box">
      <h3 className="font-bold mb-2 text-yellow-800 text-xl font-[Poppins] flex items-center gap-2">
        💪 Motivation
      </h3>
      <div className="quoteapi mb-4">
        {loading && (
          <p className="text-yellow-700 font-[Poppins]">
            Loading motivational quote...
          </p>
        )}
        {error && <p className="text-red-600 font-[Poppins]">{error}</p>}
        {quote && (
          <div className="bg-white/50 p-4 rounded-lg">
            <p className="text-yellow-700 font-[Poppins] text-lg italic">
              "{quote.quote}"
            </p>
            <p className="text-yellow-600 font-[Poppins] mt-2 text-sm">
              - {quote.author}
            </p>
          </div>
        )}
        <div className="reload-btn mt-4 flex justify-end">
          <button
            onClick={() => {
              setLoading(true);
              setError(null);
              fetchQuote();
            }}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-[Poppins] text-sm flex items-center gap-2 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            New Quote
          </button>
        </div>
      </div>
      <textarea
        className="w-full p-2 rounded border border-yellow-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none font-[Poppins] text-lg"
        placeholder="Write your motivation for a Day..."
        rows="4"
      />
    </div>
  );
};

export default Motivation;

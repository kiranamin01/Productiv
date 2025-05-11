import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const Motivation = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = useCallback(async () => {
    const options = {
      method: "GET",
      url: "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote",
      params: {
        token: "ipworld.info",
      },
      headers: {
        "x-rapidapi-key": "9477a275e8mshaea7fb8d9b8f72cp17c948jsn1fbb7ad73afa",
        "x-rapidapi-host":
          "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
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

  const [personalMotivation, setPersonalMotivation] = useState("");
  const [savedMotivations, setSavedMotivations] = useState([]);

  const handleSaveMotivation = () => {
    if (personalMotivation.trim()) {
      setSavedMotivations([
        ...savedMotivations,
        {
          text: personalMotivation,
          date: new Date().toLocaleDateString(),
        },
      ]);
      setPersonalMotivation("");
    }
  };

  return (
    <div className="motivation bg-yellow-100 p-4 rounded-lg shadow dashboard-card-box">
      <div className="header flex justify-between items-center">
        <h3 className="font-bold mb-2 text-yellow-800 text-xl font-[Poppins] flex items-center gap-2">
          💪 Motivation
        </h3>
      </div>
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
              "{quote.text}"
            </p>
            <p className="text-yellow-600 font-[Poppins] mt-5 text-sm">
              - {quote.author}
            </p>
            <div className="reload-btn mt-1 flex justify-end">
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
        )}
      </div>
      <div className="personal-motivation-section">
        <textarea
          value={personalMotivation}
          onChange={(e) => setPersonalMotivation(e.target.value)}
          className="w-full p-2 rounded border border-yellow-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none font-[Poppins] text-lg bg-gradient-to-b from-yellow-50 to-yellow-50 bg-stripes"
          placeholder="Write your motivation for a Day..."
          rows="4"
        />
        <div className="flex justify-end mt-2">
          <button
            onClick={handleSaveMotivation}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-[Poppins] text-sm transition-colors"
          >
            Save Motivation
          </button>
        </div>

        {savedMotivations.length > 0 && (
          <div className="saved-motivations mt-4">
            <h4 className="font-bold text-yellow-800 mb-2">Your Motivations</h4>
            <div className="space-y-2">
              {savedMotivations.map((motivation, index) => (
                <div key={index} className="bg-white/30 p-3 rounded-lg">
                  <p className="text-yellow-700">{motivation.text}</p>
                  <p className="text-xs text-yellow-600 mt-1">
                    {motivation.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Motivation;

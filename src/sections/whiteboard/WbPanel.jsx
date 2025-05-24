const WbPanel = () => {
  return (
    <div className="whiteboard-panel flex justify-between mb-4 bg-amber-200 w-full rounded-xl my-4 py-2 px-4">
      <div className="wb-panel-text font-[Poppins] flex justify-center">
        <h2 className="text-gray-800 font-semibold text-lg lg:text-xl flex items-center gap-2">
          <span role="img" aria-label="whiteboard">
            📝
          </span>
          WhiteBoard Panel
          <span role="img" aria-label="sparkles">
            ✨
          </span>
        </h2>
      </div>
      <div className="wb-panel-btn">
        <button>
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WbPanel;

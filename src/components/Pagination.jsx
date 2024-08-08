import React from "react";

const Pagination = ({ setPage, page, totalPages }) => {
  const handlePrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextClick = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="flex justify-center my-4">
      <button
        onClick={handlePrevClick}
        className="px-4 py-2 mx-1 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-50"
        disabled={page <= 1}
      >
        Prev
      </button>
      {[...Array(totalPages).keys()].map((num) => (
        <button
          key={num + 1}
          onClick={() => setPage(num + 1)}
          className={`px-4 py-2 mx-1 ${
            num + 1 === page
              ? "bg-blue-500 text-white"
              : "bg-gray-700 text-white hover:bg-gray-600"
          } rounded`}
        >
          {num + 1}
        </button>
      ))}
      <button
        onClick={handleNextClick}
        className="px-4 py-2 mx-1 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-50"
        disabled={page >= totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

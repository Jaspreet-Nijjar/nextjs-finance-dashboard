const Pagination = ({ currentPage, onPageChange }: any) => {
  return (
    <div className="flex justify-center my-4">
      <button
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-l"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="px-4 py-2">{currentPage}</span>
      <button
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-r"
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

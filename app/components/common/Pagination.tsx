import { Button } from '@/components/ui/button';

const Pagination = ({ currentPage, onPageChange }: any) => {
  return (
    <div className="flex justify-center items-center my-4">
      <Button
        className="bg-gray-200"
        variant="secondary"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </Button>

      <span className="px-4 py-2 text-[12px]">{currentPage}</span>

      <Button
        className="bg-gray-200"
        variant="secondary"
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;

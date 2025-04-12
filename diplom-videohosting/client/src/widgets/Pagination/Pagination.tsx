import React from "react";
import { useNavigate } from "react-router-dom";

interface PaginationParams {
  currentPage: number;
  limit: number;
  total: number;
}

const Pagination: React.FC<PaginationParams> = ({
  currentPage,
  limit,
  total,
}) => {
  const navigate = useNavigate();
  const totalPages = Math.ceil(total / limit);

  const goToPage = (page: number) => {
    navigate(`?page=${page}&limit=${limit}`);
  };

  return (
    <div className="flex gap-1 w-fit dark:text-white">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          disabled={page === currentPage}
          onClick={() => goToPage(page)}
          className={`border-black dark:border-white border-solid flex justify-center content-center  border-2 p-1 aspect-square h-[30px] shadow-xl ${
            page === currentPage && "bg-slate-400"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

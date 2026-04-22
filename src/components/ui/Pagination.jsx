import { useState } from "react";

export default function Pagination({ totalPages = 3, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    const next = Math.max(1, Math.min(totalPages, page));
    setCurrentPage(next);
    onPageChange?.(next);
  };

  return (
    <>
      <div className="join text-mainColor flex gap-6">
        <button
          type="button"
          onClick={() => goToPage(currentPage - 1)}
          className="join-item btn bg-[#F5F5F5] border border-amber-50 text-mainColor flex gap-1"
        >
          « Previous
        </button>
        <div>
          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                type="button"
                onClick={() => goToPage(page)}
                className={`join-item btn border border-amber-50 ${
                  currentPage === page ? "btn-error" : "bg-[#FFFFFF] text-mainColor"
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => goToPage(currentPage + 1)}
          className="join-item  btn bg-[#F5F5F5]  flex gap-1  text-mainColor border border-amber-50"
        >
          Next »
        </button>
      </div>
    </>
  );
}

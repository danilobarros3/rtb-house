"use client";

import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const safeTotalPages = Math.max(1, totalPages);

  const getPageNumbers = () => {
    const delta = 2;
    const range: number[] = [];
    const rangeWithDots: Array<number | "..."> = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(safeTotalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < safeTotalPages - 1) {
      rangeWithDots.push("...", safeTotalPages);
    } else if (safeTotalPages > 1) {
      rangeWithDots.push(safeTotalPages);
    }

    return rangeWithDots;
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Button
        type="button"
        variant="ghost"
        className="text-black hover:bg-transparent! hover:text-red-500"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ArrowLeft className="h-5 w-5" />
      </Button>

      {getPageNumbers().map((pageNumber, index) => (
        <Button
          key={index}
          type="button"
          variant="ghost"
          className={`w-8 h-8  ${
            pageNumber === currentPage
              ? "text-white bg-red-500 hover:bg-red-500! hover:text-white"
              : "bg-transparent text-black hover:bg-transparent! hover:text-red-500"
          }`}
          onClick={() =>
            typeof pageNumber === "number" ? onPageChange(pageNumber) : null
          }
        >
          {pageNumber}
        </Button>
      ))}

      <Button
        type="button"
        variant="ghost"
        className="text-black hover:bg-transparent! hover:text-red-500"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === safeTotalPages}
      >
        <ArrowRight className="h-5 w-5" />
      </Button>
    </div>
  );
}
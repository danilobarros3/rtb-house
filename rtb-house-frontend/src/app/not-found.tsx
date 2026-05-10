import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-8xl font-black text-black md:text-9xl">
          404
        </h1>

        <p className="mt-4 text-2xl font-semibold uppercase tracking-[0.3em] text-red-500">
          Not Found
        </p>
        <p className="mt-4 text-base text-gray-500">  The page you were looking for does not exist.
        </p>
        <div className="flex items-center justify-center">
        <Link href="/orders" className="mt-4 text-base text-gray-500 hover:text-red-500 flex items-center gap-2 border border-red-500 rounded-md px-4 py-2">
          Go to main page <ArrowRight className="h-4 w-4" />
        </Link>
        </div>
      </div>
    </div>
  );
}
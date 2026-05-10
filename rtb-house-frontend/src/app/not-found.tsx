export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-8xl font-black text-black md:text-9xl">
          404
        </h1>

        <p className="mt-4 text-2xl font-semibold uppercase tracking-[0.3em] text-red-500">
          Not Found
        </p>
      </div>
    </div>
  )
}
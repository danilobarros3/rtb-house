type InfoTechCardProps = {
  title: string
  description: string
  items?: string[]
}

export function InfoTechCard({
  title,
  description,
  items = [],
}: InfoTechCardProps) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-2xl font-semibold text-black">{title}</h2>
      </div>

      <p className="text-sm leading-7 text-gray-500">{description}</p>

      {items.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

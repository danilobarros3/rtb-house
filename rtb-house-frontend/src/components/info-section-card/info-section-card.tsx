type InfoSectionCardProps = {
  title: string
  subtitle: string
  description: string
}

export function InfoSectionCard({
  title,
  subtitle,
  description,
}: InfoSectionCardProps) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <h1 className="text-3xl md:text-4xl font-bold text-primary">{title}</h1>

      <div className="mt-6 space-y-2">
        <p className="text-2xl font-semibold text-black">{subtitle}</p>

        <p className="max-w-4xl text-base leading-7 text-gray-500">
          {description}
        </p>
      </div>
    </div>
  )
}

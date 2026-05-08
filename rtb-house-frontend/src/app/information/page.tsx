import backendStack from "@/utils/data/stacks-backend.json"
import frontendStack from "@/utils/data/stacks-frontend.json"
import informationFeatures from "@/utils/data/information-features.json"
import { InfoTechCard } from "@/components/info-tech-card/info-tech-card"
import { InfoSectionCard } from "@/components/info-section-card/info-section-card"

export default function InformationPage() {
  return (
    <section className="min-h-screen w-full bg-zinc-100 px-6 py-10">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-6">
        <InfoSectionCard
          title="Information"
          subtitle="Danilo Vieira Barros"
          description="This project is a sales management dashboard where each seller has their own orders, products, and country data. The application was built using mocked data, which was later transformed into a PostgreSQL database seed for backend integration."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <InfoTechCard
            title="Backend"
            description="The backend was developed using NestJS with Prisma ORM and PostgreSQL. Mocked data was converted into database seeds to simulate a real-world sales environment."
            items={backendStack}
          />

          <InfoTechCard
            title="Frontend"
            description="The frontend was built with React and Next.js using TypeScript. The interface was designed with TailwindCSS and Shadcn UI, focusing on responsiveness, clean components, and user experience."
            items={frontendStack}
          />

          <InfoTechCard
            title="Features"
            description="The system includes advanced filtering and data visualization for sales management. Users can filter information by sellers, countries, and products."
            items={informationFeatures}
          />
        </div>
        <InfoSectionCard
          title="Acknowledgements"
          subtitle="Acknowledgements"
          description="I would like to thank RTB HOUSE for the opportunity to participate in this selection process and for the chance to demonstrate my technical skills through this project."
        />
        </div>
    </section>
  )
}
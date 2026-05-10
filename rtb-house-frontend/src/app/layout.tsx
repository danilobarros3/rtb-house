import { Geist_Mono, Inter } from "next/font/google"
import type { Metadata } from "next"
import type { ReactNode } from "react"
import favicon from "../assets/favicon.ico"
import { Footer } from "../components/footer/footer"
import "./globals.css"
import { Header } from "../components/header/header"
import { ThemeProvider } from "../components/theme-provider"
import { cn } from "../lib/utils"


const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const siteDescription =
  "This project is a sales management dashboard where each seller has their own orders, products, and country data. The application was built using mocked data, which was later transformed into a PostgreSQL database seed for backend integration."

export const metadata: Metadata = {
  title: "RTB House",
  description: siteDescription,
  openGraph: {
    title: "RTB House",
    description: siteDescription,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "RTB House",
    description: siteDescription,
  },
  icons: {
    icon: [{ url: favicon.src, type: "image/png", sizes: "225x225" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-screen bg-gray-200">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex min-h-0 flex-1 flex-col bg-zinc-100">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

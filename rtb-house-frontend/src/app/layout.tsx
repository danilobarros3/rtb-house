import { Geist_Mono, Inter } from "next/font/google"
import React from "react"
import type { ReactNode } from "react"
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
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

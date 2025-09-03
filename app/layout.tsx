import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Daniel Uribe - Full-Stack Developer",
  description:
    "Portafolio profesional de Daniel Ignacio Uribe Pulgar, Full-Stack Developer Junior especializado en React, JavaScript, Java y Spring Boot.",
  keywords: ["Full-Stack Developer", "React", "JavaScript", "Java", "Spring Boot", "Portfolio"],
  authors: [{ name: "Daniel Ignacio Uribe Pulgar" }],
  creator: "Daniel Ignacio Uribe Pulgar",
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: "Daniel Uribe - Full-Stack Developer",
    description: "Portafolio profesional de Daniel Ignacio Uribe Pulgar",
    siteName: "Daniel Uribe Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`font-sans ${dmSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="portfolio-theme"
        >
          <Suspense fallback={null}>
            {children}
          </Suspense>
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

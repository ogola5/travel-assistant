import type React from "react"
import type { Metadata } from "next"
import "../styles/globals.css"

export const metadata: Metadata = {
  title: "TravelBuddy Q&A",
  description: "A Q&A app for travel questions with health travel support, powered by Google Gemini",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        {/* Background Image Container */}
        <div className="fixed inset-0 z-[-1]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/travel-background.png')",
              filter: "brightness(0.15) blur(1px)",
            }}
          ></div>

          {/* Gradient Overlay - Updated to new color scheme */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#035A52]/80 to-[#035A52]/95"></div>
        </div>

        {children}
      </body>
    </html>
  )
}

"use client"

import { useQuery } from "@/hooks/useQuery"
import QueryForm from "@/components/query-form"
import ResponseDisplay from "@/components/response-display"
import QueryHistory from "@/components/query-history"
import Navbar from "@/components/navbar"
import { Sparkles, Lightbulb } from "lucide-react"

export default function Home() {
  const { response, history, isLoading, error, submitQuery, toggleHealthMode, healthMode } = useQuery()

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8">
        <header className="w-full max-w-4xl glass p-6 mb-10 rounded-lg shadow-md animate-fade-in">
          <h1 className="text-2xl font-bold text-[#035A52] sm:text-3xl lg:text-4xl text-center flex items-center justify-center space-x-3 dark:text-[#FCFAEE]">
            <div className="relative">
              <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-[#D8E267]" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D8E267] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D8E267]"></span>
              </span>
            </div>
            <span>TravelBuddy Professional</span>
          </h1>

          <div className="mt-4 flex justify-center">
            <div className="ai-badge">
              <div className="ai-badge-pulse"></div>
              <span>AI-Powered Travel Assistant</span>
            </div>
          </div>
        </header>

        <main className="w-full max-w-4xl space-y-10">
          <QueryForm
            onSubmit={submitQuery}
            isLoading={isLoading}
            error={error}
            healthMode={healthMode}
            toggleHealthMode={toggleHealthMode}
          />
          {response && <ResponseDisplay response={response} />}
          {history.length > 0 && <QueryHistory history={history} />}

          <div className="travel-tips">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="h-5 w-5 text-[#035A52] dark:text-[#D8E267]" />
              <h2 className="text-lg font-semibold text-[#035A52] dark:text-[#D8E267]">Travel Tip</h2>
            </div>
            <p className="text-white text-sm">
              Always check the latest travel advisories and visa requirements before planning your trip. Requirements
              can change frequently, especially during peak travel seasons.
            </p>
          </div>
        </main>
      </div>
    </>
  )
}

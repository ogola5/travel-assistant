"use client"

import type React from "react"
import { useState } from "react"
import { Heart, Loader2, Search, Plane, MapPin, Calendar, AlertCircle, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface QueryFormProps {
  onSubmit: (question: string) => void
  isLoading: boolean
  error: string | null
  healthMode: boolean
  toggleHealthMode: () => void
}

export default function QueryForm({ onSubmit, isLoading, error, healthMode, toggleHealthMode }: QueryFormProps) {
  const [question, setQuestion] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim()) return
    onSubmit(question)
    setQuestion("")
  }

  return (
    <div className="w-full animate-fade-in">
      <div className="rounded-lg bg-[#FCFAEE] p-6 shadow-md dark:bg-[#035A52]/80 border border-[#035A52]/10 dark:border-[#D8E267]/10 relative overflow-hidden">
        {/* Subtle decoration elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#D8E267]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#035A52]/5 rounded-full blur-3xl"></div>

        <form onSubmit={handleSubmit} className="space-y-4 relative">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2">
              <Plane className="h-5 w-5 text-[#035A52] dark:text-[#D8E267]" />
              <h2 className="text-xl font-semibold text-[#035A52] dark:text-[#FCFAEE]">Travel Query</h2>
            </div>

            <button
              type="button"
              onClick={toggleHealthMode}
              className={cn(
                "flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all",
                healthMode
                  ? "bg-gradient-to-r from-green-500 to-[#035A52] text-white shadow-sm"
                  : "bg-[#035A52]/10 text-[#035A52] hover:bg-[#035A52]/20 dark:bg-[#D8E267]/10 dark:text-[#FCFAEE] dark:hover:bg-[#D8E267]/20",
              )}
              aria-pressed={healthMode}
            >
              <Heart className={cn("h-4 w-4", healthMode ? "fill-white" : "")} />
              <span>Health Travel Mode</span>
            </button>
          </div>

          <div className="relative mt-4">
            <div className="absolute top-4 left-4 text-[#035A52]/60 dark:text-[#D8E267]/60">
              <Search className="h-5 w-5" />
            </div>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className={cn(
                "w-full min-h-[150px] rounded-md border pl-12 pr-4 py-4 text-base shadow-sm focus:border-[#035A52] focus:ring-1 focus:ring-[#035A52] dark:bg-[#035A52]/50 dark:border-[#D8E267]/30 dark:text-[#FCFAEE] dark:placeholder:text-[#FCFAEE]/50 dark:focus:border-[#D8E267] dark:focus:ring-[#D8E267]/30",
                healthMode ? "border-green-300 bg-green-50/30" : "border-[#035A52]/20 bg-white",
              )}
              placeholder={
                healthMode
                  ? "Ask a medical travel question (e.g., What visas are needed for medical treatment in Ireland?)"
                  : "Ask a travel question (e.g., What documents do I need to travel from Kenya to Ireland?)"
              }
              rows={5}
              aria-label="Travel question input"
            />
          </div>

          <div className="flex flex-wrap gap-2 text-xs text-[#035A52]/70 dark:text-[#FCFAEE]/70">
            <div className="flex items-center gap-1 bg-[#035A52]/10 dark:bg-[#D8E267]/10 px-2 py-1 rounded-md">
              <MapPin className="h-3 w-3" />
              <span>Destinations</span>
            </div>
            <div className="flex items-center gap-1 bg-[#035A52]/10 dark:bg-[#D8E267]/10 px-2 py-1 rounded-md">
              <Calendar className="h-3 w-3" />
              <span>Travel Dates</span>
            </div>
            <div className="flex items-center gap-1 bg-[#035A52]/10 dark:bg-[#D8E267]/10 px-2 py-1 rounded-md">
              <AlertCircle className="h-3 w-3" />
              <span>Requirements</span>
            </div>
          </div>

          {error && (
            <div className="rounded-md bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/30 dark:text-red-300 flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading || !question.trim()}
            className={cn(
              "flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#035A52] to-[#035A52]/90 px-6 py-3 text-[#FCFAEE] shadow-sm transition-all hover:from-[#035A52] hover:to-[#035A52]/80 dark:from-[#D8E267] dark:to-[#D8E267]/90 dark:text-[#035A52] dark:hover:from-[#D8E267] dark:hover:to-[#D8E267]/80",
              "disabled:opacity-70 disabled:cursor-not-allowed",
              "transform hover:translate-y-[-1px] active:translate-y-[1px]",
            )}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <Sparkles className="h-5 w-5" />
                <span>Submit Query</span>
              </>
            )}
          </button>

          <p className="text-center text-xs text-[#035A52]/70 dark:text-[#FCFAEE]/70">
            {healthMode
              ? "Health Travel Mode is active - your questions will be answered with medical travel considerations in mind."
              : "Ask any travel-related question about visas, documents, or requirements."}
          </p>
        </form>
      </div>
    </div>
  )
}

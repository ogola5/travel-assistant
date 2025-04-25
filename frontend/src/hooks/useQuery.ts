"use client"

import { useState, useCallback } from "react"

interface HistoryItem {
  question: string
  response: string
  isHealthMode: boolean
}

export const useQuery = () => {
  const [response, setResponse] = useState<string | null>(null)
  const [history, setHistory] = useState<HistoryItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [healthMode, setHealthMode] = useState(false)

  const submitQuery = useCallback(
    async (question: string) => {
      setIsLoading(true)
      setError(null)

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const aiResponse = `AI Response to: ${question}. This is a simulated response. Here's some helpful information for your travel plans. Remember to check visa requirements and travel advisories.`

        setResponse(aiResponse)
        setHistory((prevHistory) => [{ question, response: aiResponse, isHealthMode: healthMode }, ...prevHistory])
      } catch (e: any) {
        setError(e.message || "An error occurred")
      } finally {
        setIsLoading(false)
      }
    },
    [healthMode],
  )

  const toggleHealthMode = useCallback(() => {
    setHealthMode((prev) => !prev)
  }, [])

  return {
    response,
    history,
    isLoading,
    error,
    submitQuery,
    toggleHealthMode,
    healthMode,
  }
}

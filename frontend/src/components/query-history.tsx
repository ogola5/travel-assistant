import { History, Calendar, MapPin, Tag, Heart } from "lucide-react"
import ReactMarkdown from "react-markdown"
import { cn } from "@/lib/utils"

interface HistoryItem {
  question: string
  response: string
  isHealthMode: boolean
}

interface QueryHistoryProps {
  history: HistoryItem[]
}

export default function QueryHistory({ history }: QueryHistoryProps) {
  if (history.length === 0) {
    return null
  }

  return (
    <div className="animate-fade-in">
      <div className="rounded-lg bg-[#FCFAEE] p-6 shadow-md dark:bg-[#035A52]/80 border border-[#035A52]/10 dark:border-[#D8E267]/10 relative overflow-hidden">
        <div className="relative">
          <div className="mb-4 flex items-center gap-2 text-[#035A52] dark:text-[#D8E267]">
            <History className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Previous Queries</h2>
          </div>

          <div className="space-y-4">
            {history.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "rounded-md border p-4 transition-all hover:shadow-sm",
                  item.isHealthMode
                    ? "border-green-200 bg-green-50/30 dark:border-green-800/30 dark:bg-green-900/10"
                    : "border-[#035A52]/10 bg-white dark:border-[#D8E267]/10 dark:bg-[#035A52]/50",
                )}
              >
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <h3 className="font-medium text-[#035A52] dark:text-[#FCFAEE]">{item.question}</h3>
                  {item.isHealthMode && (
                    <span className="flex items-center gap-1 rounded-md bg-gradient-to-r from-green-500 to-[#035A52] px-2 py-0.5 text-xs text-white dark:from-green-500 dark:to-[#D8E267]">
                      <Heart className="h-3 w-3" />
                      <span>Health Mode</span>
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  <div className="flex items-center gap-1 bg-[#035A52]/10 dark:bg-[#D8E267]/10 px-2 py-0.5 rounded-md text-xs text-[#035A52] dark:text-[#FCFAEE]">
                    <Calendar className="h-3 w-3" />
                    <span>Today</span>
                  </div>
                  <div className="flex items-center gap-1 bg-[#035A52]/10 dark:bg-[#D8E267]/10 px-2 py-0.5 rounded-md text-xs text-[#035A52] dark:text-[#FCFAEE]">
                    <MapPin className="h-3 w-3" />
                    <span>Travel</span>
                  </div>
                  <div className="flex items-center gap-1 bg-[#035A52]/10 dark:bg-[#D8E267]/10 px-2 py-0.5 rounded-md text-xs text-[#035A52] dark:text-[#FCFAEE]">
                    <Tag className="h-3 w-3" />
                    <span>Documents</span>
                  </div>
                </div>

                <div className="prose prose-sm prose-emerald max-w-none dark:prose-invert">
                  <ReactMarkdown>{item.response}</ReactMarkdown>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

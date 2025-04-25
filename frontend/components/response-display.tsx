import { ThumbsUp, ThumbsDown, Copy, Share2, Sparkles } from "lucide-react"
import ReactMarkdown from "react-markdown"

interface ResponseDisplayProps {
  response: string
}

export default function ResponseDisplay({ response }: ResponseDisplayProps) {
  return (
    <div className="animate-fade-in">
      <div className="rounded-lg bg-gradient-to-r from-[#035A52] to-[#035A52]/90 p-0.5 shadow-md relative dark:from-[#D8E267] dark:to-[#D8E267]/90">
        <div className="rounded-md bg-[#FCFAEE] p-6 dark:bg-[#035A52]/90 relative">
          <div className="mb-4 flex items-center gap-2 text-[#035A52] dark:text-[#D8E267]">
            <div className="relative">
              <Sparkles className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D8E267] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D8E267]"></span>
              </span>
            </div>
            <h2 className="text-xl font-semibold">Response</h2>
          </div>

          <div className="prose prose-emerald max-w-none dark:prose-invert">
            <ReactMarkdown>{response}</ReactMarkdown>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#035A52]/10 dark:border-[#D8E267]/10 pt-4">
            <div className="flex items-center gap-2">
              <button className="rounded-md p-2 text-[#035A52] hover:bg-[#035A52]/5 dark:text-[#D8E267] dark:hover:bg-[#D8E267]/10">
                <ThumbsUp className="h-4 w-4" />
              </button>
              <button className="rounded-md p-2 text-[#035A52] hover:bg-[#035A52]/5 dark:text-[#D8E267] dark:hover:bg-[#D8E267]/10">
                <ThumbsDown className="h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 rounded-md bg-[#035A52]/10 px-3 py-1 text-xs font-medium text-[#035A52] hover:bg-[#035A52]/20 dark:bg-[#D8E267]/10 dark:text-[#D8E267] dark:hover:bg-[#D8E267]/20">
                <Copy className="h-3 w-3" />
                <span>Copy</span>
              </button>
              <button className="flex items-center gap-1 rounded-md bg-[#035A52]/10 px-3 py-1 text-xs font-medium text-[#035A52] hover:bg-[#035A52]/20 dark:bg-[#D8E267]/10 dark:text-[#D8E267] dark:hover:bg-[#D8E267]/20">
                <Share2 className="h-3 w-3" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

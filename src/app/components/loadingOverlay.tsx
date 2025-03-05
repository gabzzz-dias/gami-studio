import { useLoading } from "../utils/loadingProvider"
import { LoadingSpinner } from "../components/ui/loadingSpinner"
import { cn } from "../lib/utils"

interface LoadingOverlayProps {
  loadingKey?: string
  fullScreen?: boolean
  className?: string
}

export function LoadingOverlay({ loadingKey = "global", fullScreen = false, className }: LoadingOverlayProps) {
  const { isLoading } = useLoading()
  const loading = isLoading(loadingKey)

  if (!loading) return null

  return (
    <div
      className={cn(
        "flex items-center justify-center bg-black/80 z-50",
        fullScreen ? "fixed inset-0" : "absolute inset-0",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <LoadingSpinner size="xl" />
      </div>
    </div>
  )
}


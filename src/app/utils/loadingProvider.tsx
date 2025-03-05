"use client"

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react"

type LoadingState = {
  [key: string]: boolean
}

interface LoadingContextType {
  isLoading: (key?: string) => boolean
  startLoading: (key?: string) => void
  stopLoading: (key?: string) => void
  anyLoading: boolean
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [loadingState, setLoadingState] = useState<LoadingState>({})

  const isLoading = useCallback(
    (key = "global") => {
      return !!loadingState[key]
    },
    [loadingState]
  )

  const startLoading = useCallback((key = "global") => {
    setLoadingState((prev) => ({ ...prev, [key]: true }))
  }, [])

  const stopLoading = useCallback((key = "global") => {
    setLoadingState((prev) => ({ ...prev, [key]: false }))
  }, [])

  const anyLoading = Object.values(loadingState).some(Boolean)

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading, anyLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider")
  }
  return context
}

export function useLoadingCallback<T extends (...args: any[]) => Promise<any>>(
  callback: T,
  key?: string
): (...args: Parameters<T>) => Promise<Awaited<ReturnType<T>>> {
  const { startLoading, stopLoading } = useLoading()
  
  return useCallback(
    async (...args: Parameters<T>) => {
      try {
        startLoading(key)
        return await callback(...args)
      } finally {
        stopLoading(key)
      }
    },
    [callback, key, startLoading, stopLoading]
  )
}

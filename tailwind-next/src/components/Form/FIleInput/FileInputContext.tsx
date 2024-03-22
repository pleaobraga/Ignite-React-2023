'use client'

import { createContext, useContext } from 'react'

type FileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple?: boolean) => void
}

export const FileInputContext = createContext({} as FileInputContextType)

export const useFileInput = () => useContext(FileInputContext)

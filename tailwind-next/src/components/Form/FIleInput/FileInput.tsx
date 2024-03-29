'use client'

import { Trash2, UploadCloud, User } from 'lucide-react'
import { ComponentProps, useId, useMemo, useState } from 'react'
import { FileInputContext, useFileInput } from './FileInputContext'
import { formatBytes } from '@/Utils/formatBytes'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Button } from '@/components/Button/Button'
import { FileItem } from './FileItem'

interface FileInputRootProps extends ComponentProps<'div'> {}

function FileInputRoot(props: FileInputRootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFilesSelected(files: File[], multiple?: boolean) {
    if (multiple) {
      setFiles((prevFiles) => [...prevFiles, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

interface FileInputTriggerProps {}

function FileInputTrigger({}: FileInputTriggerProps) {
  const { id } = useFileInput()

  return (
    <label
      htmlFor={id}
      className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:bg-violet-50 hover:text-violet-500"
    >
      <div className="rounded-full border-[6px] border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
        <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-600" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-sm ">
          <span className="font-semibold text-violet-700">Click to upload</span>{' '}
          or drag and drop
        </span>
        <span className="text-sm">JPG, PNG, GIF up to 10MB</span>
      </div>
    </label>
  )
}

interface FileInputImagePreviewProps {}

function FileInputImagePreview({}: FileInputImagePreviewProps) {
  const { files } = useFileInput()

  const previewURL = useMemo(() => {
    const file = files[0]
    if (!file) return null

    return URL.createObjectURL(file)
  }, [files])

  if (previewURL === null) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
        <User className="h-8 w-8 text-violet-500" />
      </div>
    )
  }

  return <img src={previewURL} className="w16 h-16 rounded-full object-cover" />
}

interface FileInputControlProps extends ComponentProps<'input'> {}

function FileInputControlPreview({
  multiple = false,
  ...props
}: FileInputControlProps) {
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(event: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files || [])
    onFilesSelected(files, multiple)
  }

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      onChange={handleFilesSelected}
      multiple={multiple}
      {...props}
    />
  )
}

interface FileListProps extends ComponentProps<'div'> {}

function FileList(props: FileListProps) {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => (
        <FileItem key={file.name} name={file.name} size={file.size} state='error' />
      ))}
    </div>
  )
}

export const FileInput = {
  Root: FileInputRoot,
  Trigger: FileInputTrigger,
  ImagePreview: FileInputImagePreview,
  Control: FileInputControlPreview,
  List: FileList,
}

import React, { ComponentProps, InputHTMLAttributes } from 'react'

type InputPrefixProps = ComponentProps<'div'>

function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />
}

type InputControlProps = ComponentProps<'input'>

function InputControl(props: InputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 focus:outline-none"
      {...props}
    />
  )
}

type InpuRootProps = ComponentProps<'div'>

function InpuRoot(props: InpuRootProps) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}

export const Input = {
  Root: InpuRoot,
  Control: InputControl,
  Prefix: InputPrefix,
}

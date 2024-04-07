import React from 'react'

interface TooltipProps {
  message: string;
  children: React.ReactNode;
}

export const Tooltip = ({ message, children }: TooltipProps) => {
  return (
    <div className="group relative flex">
      {children}
      <span className="absolute -top-5 left-1/2 -translate-x-1/2 scale-0 transition-all rounded bg-black-two py-1 px-2 text-xs text-white group-hover:scale-100">
        {message}
      </span>
    </div>
  )
}

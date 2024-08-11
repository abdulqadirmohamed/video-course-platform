import { cn } from '@/lib/utils'
import { MoveLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const BackButton = ({
    href,
    text,
    className
  }: {
    href: string
    text: string
    className?: string
  }) => {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex cursor-pointer items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground',
        className
      )}
    >
      <MoveLeft size={16} strokeWidth={1.25} />
      <span>{text}</span>
    </Link>
  )
}

export default BackButton
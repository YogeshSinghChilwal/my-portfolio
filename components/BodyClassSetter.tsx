'use client'

import { useEffect } from 'react'

interface BodyClassControllerProps {
  enableOverflowHidden?: boolean
}

export function BodyClassController({ enableOverflowHidden = false }: BodyClassControllerProps) {
  useEffect(() => {
    const body = document.body

    if (enableOverflowHidden) {
      body.classList.add('body--overflow-hidden')
    } else {
      body.classList.remove('body--overflow-hidden')
    }

    return () => {
      body.classList.remove('body--overflow-hidden')
    }
  }, [enableOverflowHidden])

  return null
}

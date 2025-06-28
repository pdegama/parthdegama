import { useState, useEffect } from 'react'
import { ButtonPrimary } from '../components/ButtonPrimary'

export default function ShortcutError() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <ButtonPrimary as="a" href="/">
      Tap to go home →
    </ButtonPrimary>
  )
}

'use client'

import { Error } from 'components/Error'

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div>
      <Error message={error.message} />
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}

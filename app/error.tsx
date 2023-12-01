'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <section className="w-full flex text-center md:text-left justify-center">
      <div className=" flex flex-col py-10 md:py-44 items-center  gap-8 md:gap-24 w-full max-w-screen-xl mx-5 md:mx-20">
        <h2 className='md:text-xl text-primaryColor font-bold'>Something went wrong ⚠️</h2>
        <span className='md:text-xl text-black'>{error.message}</span>
      </div>
    </section >
  )
}
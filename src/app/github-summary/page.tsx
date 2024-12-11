import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Github Summary - Ratnesh Maurya',
    description: 'Github Summary of Ratnesh Maurya',
}

function page() {
  return (
    <div className='flex  min-h-screen flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold'>Github Summary</h1>
    </div>
  )
}

export default page
import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-50">
      
      {/* 404 Title */}
      <h1 className="text-7xl font-bold text-gray-800">404</h1>

      {/* Message */}
      <h2 className="text-2xl font-semibold mt-4 text-gray-700">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        The page you are looking for doesn’t exist or may have been moved.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
    </div>
  )
}

export default NotFound

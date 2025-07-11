"use client"
import { useEffect, useState } from "react";

export default function Home() {

  const [loading  , setLoading] = useState(false)

  useEffect(() => {
    window.location.href = '/home'
  })
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      <p className="ml-4 text-gray-600">Welcome to Synture</p>
      </div>
    );
  }
    return (
      <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      <p className="ml-4 text-gray-600">Welcome to Synture</p>
      </div>
    );
}

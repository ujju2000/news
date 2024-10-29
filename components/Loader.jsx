import React from 'react'
import { useProvider } from '@/app/Provider'
export default function Loader() {
    const {theme }= useProvider();
  return (
    <div className='border border-2 border-white '>
         <svg className ="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        Loading ...
    </div>
  )
}

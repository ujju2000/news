
import React from 'react'

export default function Footer() {
  return (
    <footer className = 'p-3 text-center w-full border border-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        <h1 className = 'font-bold'>NEWS</h1>

        <p className=''>Made By <span className  =' font-bold '>UJJWAL TARIKA </span></p>
        <p>&copy; {new Date().getFullYear()} All rights reserved</p>
    </footer>
  )
}

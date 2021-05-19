import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <nav className='text-white bg-blue-500 h-16 p-3 flex items-center justify-end rounded'>
      <ul className='flex justify-center items-center list-none mx-2 my-6'>
        <li className='mx-2 my-6'>
          <Link href='/'>
            <a className='lg:inline-flex lg:w-auto w-full rounded bg-gray-700 px-3 py-2'>Test</a>
          </Link>
        </li>
        <li className='mx-2 my-6'>Test2</li>
        <li className='mx-2 my-6'>Test3</li>
        <li className='mx-2 my-6'>Test4</li>
      </ul>
    </nav>
  )
}

export default Navbar

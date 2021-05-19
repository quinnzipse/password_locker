import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <nav className='text-white bg-blue-500 p-3 text-center font-semibold text-xl'>Password Locker</nav>
  )
}

export default Navbar

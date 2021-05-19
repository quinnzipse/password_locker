import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='text-white bg-indigo-500 p-3 text-center font-semibold text-xl'>
      <Link href='/'>
        <a className='lg:inline-flex py-2 px-3'>Password Locker</a>
      </Link>
    </nav>
  )
}

export default Navbar

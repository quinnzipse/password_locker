import Meta from './Meta'
import Navbar from './Navbar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <Navbar />
      <div>
        <main>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout

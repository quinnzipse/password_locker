import Meta from './Meta'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <div>
        <main>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout

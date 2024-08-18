import ClientLayout from '@/components/ClientLayout'
import '../globals.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClientLayout>
      <div className="mx-0 px-4 pt-20 sm:px-8 md:px-10 lg:mx-28">
        {children}
      </div>
    </ClientLayout>
  )
}

export default Layout

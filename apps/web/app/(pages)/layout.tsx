import ClientLayout from '@/components/ClientLayout'
import '../globals.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClientLayout>
        {children}
    </ClientLayout>
  )
}

export default Layout

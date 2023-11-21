import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function AppLayout() {
  return (
    <>
      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  )
}

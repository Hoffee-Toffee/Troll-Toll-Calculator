import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function App() {
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

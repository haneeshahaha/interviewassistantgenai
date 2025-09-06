
import { Outlet } from 'react-router-dom'
import Header from '../components/ui/header'
import Footer from '../components/ui/footer'

export const PublicLayout = () => {
  console.log('PublicLayout rendering');
  return (
    <div className="w-full">
       { /*handler to store the user data*/}
        <Header />

        <Outlet />

        <Footer />
    </div>
  )
}
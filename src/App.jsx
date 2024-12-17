import { Route , Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import ForHome from './pages/ForHome'
import Landingpage from './pages/Landingpage'
import ForHotel from './pages/ForHotel'
import Auth from './pages/Auth'
import Ecommerce from './pages/Ecommerce'
import AdminDashboard from './pages/AdminDashboard'


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/'>
        <Route index element={<Landingpage />} />
        <Route path='login' element={<Auth />} />
        <Route path='register' element={<Auth register={"register"}/>} />
        <Route path='forhome' element={<ForHome/> } />
        <Route path='forhotel' element={<ForHotel />} />
          <Route path='ecommerce' element={<Ecommerce />} />
        </Route>
        <Route path='/admin'>
          <Route index element={<AdminDashboard />} />
          </Route>
      </Routes>
    </>
  )
}

export default App

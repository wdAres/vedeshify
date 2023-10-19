import React from 'react'
import Layout from './UI/Layout/Layout'
import { Route, Routes, useLocation } from 'react-router-dom'
import StudentInfo from './Pages/StudentInfo/StudentInfo'
import StudentDetails from './Pages/StudentInfo/StudentDetails/StudentDetails'
import Dashboard from './Pages/Dashboard/Dashboard'
import Payment from './Pages/Payment/Payment'
import Classes from './Pages/Classes/Classes'
import Chats from './Pages/Chats/Chats'
import Reports from './Pages/Reports/Reports'
import Schedule from './Pages/Schedule/Schedule'
import AdminLogin from './Pages/AdminLogin/AdminLogin'
import Support from './Pages/Support/Support'
import Inquiries from './Pages/Inquiries/Inquiries'
import InquiryDetails from './Pages/Inquiries/InquiryDetails/InquiryDetails'
import Profile from './Pages/Profile/Profile'
import SupportDetails from './Pages/Support/SupportDetails/SupportDetails'
import Community from './Pages/Community/Community'
import Booking from './Pages/Booking/Booking'
import UpcomingBookingDetails from './Pages/BookingDetails/UpcomingBookingDetails'
import PastBookingDetails from './Pages/BookingDetails/PastBookingDetails'
import Login from './Pages/Auth/Login'
import Signup from './Pages/Auth/Signup'
import ForgetPassword from './Pages/Auth/ForgetPassword'
import Services from './Pages/Services/Services'
import EditService from './Pages/Services/ServiceDetails/EditService'
import AddService from './Pages/Services/ServiceDetails/AddService'
import Sch from './Pages/Sch/Sch'
import IndividualDetails from './Pages/IndividualDetails/IndividualDetails'

// import 'dotenv/config';


// import dotenv from 'dotenv'
// dotenv.config()


const App = () => {
  const location = useLocation();
  const path = location.pathname;

  // console.log(import.meta.env.VITE_DEMO);

  // alert(import.meta.env.VITE_DEMO)

  


  return (
    <>

      {path.includes('auth') || path === '/' ?

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/auth-signup' element={<Signup />} />
          <Route path='/auth-forget' element={<ForgetPassword />} />
          <Route path='/auth-individual' element={<IndividualDetails />} />
        </Routes>

        :

        <Layout>
          <main className='main_container'>
            <Routes>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='students'>
                <Route index element={<StudentInfo />} />
                <Route path='/students/details/' element={<StudentDetails />} />
              </Route>
              <Route path='payment'>
                <Route index element={<Payment />} />
              </Route>
              <Route path='classes'>
                <Route index element={<Classes />} />
              </Route>
              <Route path='chats'>
                <Route index element={<Chats />} />
              </Route>
              <Route path='community'>
                <Route index element={<Community />} />
              </Route>
              <Route path='reports'>
                <Route index element={<Reports />} />
              </Route>
              <Route path='schedule'>
                <Route index element={<Schedule />} />
              </Route>
              <Route path='support'>
                <Route index element={<Support />} />
                <Route path='/support/details/' element={<SupportDetails />} />
              </Route>
              <Route path='profile'>
                <Route index element={<Profile />} />
              </Route>
              <Route path='inquiries'>
                <Route index element={<Inquiries />} />
                <Route path='/inquiries/details/' element={<InquiryDetails />} />
              </Route>
              <Route path='services'>
                <Route index element={<Services />} />
                <Route path='/services/edit/'  element={<EditService />} />
                <Route path='/services/add/'  element={<AddService />} />
              </Route>
              <Route path='booking'>
                <Route index element={<Booking />} />
                <Route  path='/booking/upcoming-details/' element={<UpcomingBookingDetails />} />
                <Route  path='/booking/past-details/' element={<PastBookingDetails />} />
              </Route>
              <Route path='sch'>
                <Route index element={<Sch />} />
              </Route>
             
            </Routes>
          </main>
        </Layout>
      }
    </>
  )
}

export default App
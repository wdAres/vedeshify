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

// import 'dotenv/config';


// import dotenv from 'dotenv'
// dotenv.config()




const App = () => {
  const location = useLocation();
  const path = location.pathname;


  alert(import.meta.env.VITE_DEMO)


  return (
    <>

      {path === '/' ?

        <Routes>
          <Route path='/' element={<AdminLogin />} />
        </Routes>

        :

        <Layout>
          <main className='main_container'>
            <Routes>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='student'>
                <Route index element={<StudentInfo />} />
                <Route path='/student/details/' element={<StudentDetails />} />
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
              <Route path='reports'>
                <Route index element={<Reports />} />
              </Route>
              <Route path='schedule'>
                <Route index element={<Schedule />} />
              </Route>
            </Routes>
          </main>
        </Layout>
      }
    </>
  )
}

export default App
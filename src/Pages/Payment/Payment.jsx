import React, { Fragment, useState } from 'react'
import PagePath from '../../Components/PagePath/PagePath'
import Heading from '../../Components/Heading/Heading'

import classes from './Payment.module.css'
import Container from '../../UI/Container/Container'
import Tile from '../../Components/Tile/Tile'
import MainTable from '../../Components/MainTable/MainTable'
import SidebarOverlay from '../../Components/SidebarOverlay/SidebarOverlay'
import PaymentChart from '../../Components/PaymentChart/PaymentChart'
import PaymentSidebar from '../../Components/SidebarModals/PaymentSidebar'
import FilterButton from '../../Components/FilterButton/FilterButton'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Pagination from '../../Components/Pagination/Pagination'

const data = [
  {
    h5: 'Wallet',
    h1: '5,000',
    p: 'Available Withdrawable amount'
  },
  {
    h5: 'Pending',
    h1: '10,000',
    p: 'Pending Payments shown here'
  },
]

const t_data = [
  {
    id: '1233543',
    date: '12/07/2023',
    amount: '500',
    payment: 'Math Class 20/05.2023'
  },
  {
    id: '1233543',
    date: '12/07/2023',
    amount: '500',
    payment: 'Math Class 20/05.2023'
  },
  {
    id: '1233543',
    date: '12/07/2023',
    amount: '500',
    payment: 'Math Class 20/05.2023'
  },
]


const t_key = ['id', 'date', 'amount', 'payment']
const t_headings = ['Transcation ID', 'Date', 'Amount', 'Payment', 'Actions']


// Tile Data 1
const td1 = [
  {
    h5: 'Total Received amount',
    h1: '₹34,000',
    p: 'See here your total amount received from admin side against for sessions'
  }
]

// Tile Data 2
const td2 = [
  {
    h5: 'Total Received amount',
    h1: '₹34,000',
    p: 'See here your total amount received from admin side against for sessions'
  },
  {
    h5: 'Total Received amount',
    h1: '₹34,000',
    p: 'See here your total amount received from admin side against for sessions'
  }
]



const Payment = () => {

  const [viewSidebar, setSidebar] = useState(false)

  return (
    <Fragment>
      <PagePath />
      <Heading heading={'Payments'} p={'You can see your Payments here and manage them'} />

      <Container cls={classes.con}>
        <div className={classes.filter}>
          <FilterButton />
        </div>

        <div className={classes.grid}>
          <Tile data={td1} />
          <Tile data={td2} direction={'row'} />
        </div>
        <div className={classes.flex}>
        <Heading cls={classes.heading} heading={'Payment History'} p={'You can see your Payments here and manage them'} />
        <SearchBar cls={classes.sb} />
        </div>
        <MainTable detFunc={setSidebar} data={t_data} headings={t_headings} keys={t_key} />
        <Pagination total={10} limit={1} selectPage={()=>{}} />
      </Container>


      <SidebarOverlay b2={'Download Receipt'} heading={'Payment Details'} sb_value={viewSidebar} sb_func={setSidebar} >
        <PaymentSidebar />
      </SidebarOverlay>
    </Fragment>
  )
}

export default Payment
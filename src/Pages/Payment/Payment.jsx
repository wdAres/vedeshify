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

const Payment = () => {

  const [viewSidebar,setSidebar] = useState(false)

  return (
    <Fragment>
      <PagePath />
      <Heading heading={'Payments'} p={'You can see your Payments here and manage them'} />
      <div className={classes.grid}>
        <Container>
          <PaymentChart />
        </Container>
        <Tile data={data} direction={'column'} />
      </div>
      <Heading  heading={'Track Payments'} p={'You can see your Payments here and manage them'} btn={'Withdraw Amount'} />
      <MainTable detFunc={setSidebar} data={t_data} headings={t_headings} keys={t_key}/>
      <SidebarOverlay heading={'Payment Details'} sb_value={viewSidebar} sb_func={setSidebar} >
        <PaymentSidebar />
      </SidebarOverlay>
    </Fragment>
  )
}

export default Payment
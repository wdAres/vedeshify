import React, { Fragment, useState } from 'react'
import PagePath from '../../Components/PagePath/PagePath'
import Heading from '../../Components/Heading/Heading'

import classes from './Support.module.css'
import Tile from '../../Components/Tile/Tile'
import MainTable from '../../Components/MainTable/MainTable'
import SearchBar from '../../Components/SearchBar/SearchBar'
import SupportModal from '../../Components/AllModals/SupportModal/SupportModal'
import Pagination from '../../Components/Pagination/Pagination'
import { useNavigate } from 'react-router-dom'

const data = [
    {
        h5: 'Wallet',
        h1: '5,000',
        p: 'Available Withdrawable amount'
    },
    {
        h5: 'Pending',
        h1: '10,000',
        p: 'Pending Supports shown here'
    },
]

const t_data = [
    {
        id: '1233543',
        date: '12/07/2023',
        amount: '500',
        Support: 'Math Class 20/05.2023'
    },
    {
        id: '1233543',
        date: '12/07/2023',
        amount: '500',
        Support: 'Math Class 20/05.2023'
    },
    {
        id: '1233543',
        date: '12/07/2023',
        amount: '500',
        Support: 'Math Class 20/05.2023'
    },
]


const t_key = ['id', 'date', 'amount', 'Support']
const t_headings = ['Transcation ID', 'Date', 'Amount', 'Support', 'Actions']


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



const Support = () => {
    const [popup, setPop] = useState(false)
    const [viewSidebar, setSidebar] = useState(false)


    
    return (
        <Fragment>
            <PagePath />

            <div className={classes.grid}>
                <Tile data={td1} />
                <Tile data={td2} direction={'row'} />
            </div>
            <div className={classes.flex}>
                <Heading cls={classes.heading} heading={'Support & Ticket'} p={'You can see your Supports here and manage them'}  />
                <div className={classes.flex}>
                    <SearchBar cls={classes.sb} />
                    <Heading btnFunction={setPop} btnValue={popup} cls={classes.heading} btn={'Add Ticket'} />
                </div>
            </div>
            <MainTable det={true} data={t_data} headings={t_headings} keys={t_key} />
            <Pagination total={10} limit={1} selectPage={()=>{}} />

            <SupportModal isPopup={popup} popupFunc={setPop} />


        </Fragment>
    )
}

export default Support
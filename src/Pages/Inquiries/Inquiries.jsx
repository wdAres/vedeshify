import React, { Fragment, useState } from 'react'
import PagePath from '../../Components/PagePath/PagePath'
import Heading from '../../Components/Heading/Heading'

import classes from './Inquiries.module.css'
import Tile from '../../Components/Tile/Tile'
import MainTable from '../../Components/MainTable/MainTable'
import SearchBar from '../../Components/SearchBar/SearchBar'

const data = [
    {
        h5: 'Wallet',
        h1: '5,000',
        p: 'Available Withdrawable amount'
    },
    {
        h5: 'Pending',
        h1: '10,000',
        p: 'Pending Inquirys shown here'
    },
]

const t_data = [
    {
        id: '1233543',
        date: '12/07/2023',
        category: 'Career Counselling',
        Inquiry: 'Math Class 20/05.2023'
    },
    {
        id: '1233543',
        date: '12/07/2023',
        category: 'Other',
        Inquiry: 'Math Class 20/05.2023'
    },
    {
        id: '1233543',
        date: '12/07/2023',
        category: 'Other',
        Inquiry: 'Math Class 20/05.2023'
    },
]


const t_key = ['id', 'date', 'category', 'Inquiry']
const t_headings = ['ID', 'Date', 'Category', 'Inquiry', 'Actions']


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



const Inquiries = () => {

    const [viewSidebar, setSidebar] = useState(false)

    return (
        <Fragment>
            <PagePath />

            <div className={classes.grid}>
                <Tile data={td1} />
                <Tile data={td2} direction={'row'} />
            </div>
            <div className={classes.flex}>
                <Heading cls={classes.heading} heading={'Inquiry History'} p={'You can see your Inquirys here and manage them'} />
                <SearchBar cls={classes.sb} />
            </div>
            <MainTable det={true} data={t_data} headings={t_headings} keys={t_key} />
        </Fragment>
    )
}

export default Inquiries
import React from 'react'
import PagePath from '../../Components/PagePath/PagePath'
import { useLocation } from 'react-router-dom';
import Tile from '../../Components/Tile/Tile';
import classes from './Dashboard.module.css'
import BarChart from '../../Components/BarChart/BarChart';

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


const Dashboard = () => {


  return (
    <React.Fragment>
      <PagePath />
      <div className={classes.grid}>
        <Tile data={td1} />
        <Tile data={td2} direction={'row'} />
        <div><BarChart /></div>
        <Tile data={td2} direction={'column'} />
        <Tile data={td1} />
        <Tile data={td2} direction={'row'} />
      </div>
    </React.Fragment>
  )
}

export default Dashboard
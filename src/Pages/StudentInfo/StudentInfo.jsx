import React from 'react'
import { Link } from 'react-router-dom'
import PagePath from '../../Components/PagePath/PagePath'
import Heading from '../../Components/Heading/Heading'
import classes from './StudentInfo.module.css'
import Tile from '../../Components/Tile/Tile'
import FilterButton from '../../Components/FilterButton/FilterButton'
import MainTable from '../../Components/MainTable/MainTable'
import Container from '../../UI/Container/Container'
import Pagination from '../../Components/Pagination/Pagination'

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

const table_data = [
  {
    _id: '1',
    student_name: 'Puneet Shrivastav',
    phone_number: '9311676139',
    grade: 'A++',
    city: 'New Delhi'
  },
  {
    _id: '2',
    student_name: 'Roshan Jha',
    phone_number: '9311676139',
    grade: 'A++',
    city: 'New Delhi'
  }
]

const table_headings = ['Student  Name', 'Phone', 'Grade', 'City', 'Action']
const table_keys = ['student_name', 'phone_number', 'grade', 'city']


const StudentInfo = () => {
  return (
    <React.Fragment>
      <PagePath />
      <Heading heading={'All Students'} p={'See All Counselor and their details here'} />

      <Container cls={classes.con}>
        <div className={classes.filter}>
          <FilterButton />
        </div>

        <div className={classes.grid}>
          <Tile data={td1} />
          <Tile data={td2} direction={'row'} />
        </div>
        <MainTable det={true} headings={table_headings} keys={table_keys} data={table_data} />
        <Pagination total={10} limit={1} selectPage={()=>{}} />
      </Container>
    </React.Fragment>
  )
}

export default StudentInfo
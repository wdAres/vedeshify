import React, { useState } from 'react'
import classes from './Classes.module.css'
import PagePath from '../../Components/PagePath/PagePath'
import Heading from '../../Components/Heading/Heading'
import DateFilter from '../../Components/DateFilter/DateFilter'
import SortFilter from '../../Components/SortFilter/SortFilter'
import SearchBar from '../../Components/SearchBar/SearchBar'
import ClassCardContainer from '../../UI/ClassCardContainer/ClassCardContainer'
import AddClassModal from '../../Components/AllModals/AddClassModal/AddClassModal'

const d1 = [
  {
    title: 'Maths Class',
    agenda: 'Discreate Maths Chapter 1 ',
    status: 'Pending',
    timing: '10:30pam to 11:30am',
    date: '16/07/2023'
  },
  {
    title: 'Computer Class',
    agenda: 'Data Stuctures Chapter 1 ',
    status: 'Completed',
    timing: '11:30pam to 12:30am',
    date: '17/07/2023'
  },
  {
    title: 'Maths Class',
    agenda: 'Discreate Maths Chapter 2 ',
    status: 'Accepted',
    timing: '10:30pam to 11:30am',
    date: '18/07/2023'
  },

]
const d3 = [
  {
    title: 'SST Class',
    agenda: 'History Chapter 1 ',
    status: 'Completed',
    timing: '10:30pam to 11:30am',
    date: '18/07/2023'
  },

]

const d2 = [
  {
    title: 'Maths Class',
    agenda: 'Discreate Maths Chapter 1 ',
    status: 'Pending',
    timing: '10:30pam to 11:30am',
    date: '16/07/2023'
  }

]

const Classes = () => {
  const [popup,setPop] = useState(false)
  const [num, setNum] = useState(0)

  const switchComp = (number) => {
    switch (number) {
      case 0:
        return <ClassCardContainer data={d1} />
      case 1:
        return <ClassCardContainer data={d2} />
      case 2:
        return <ClassCardContainer data={d3} />
    }
  }



  return (
    <React.Fragment>

      {/* Modal */}
      <AddClassModal isPopup={popup} popupFunc={setPop} />

      <PagePath />

      <Heading btnFunction={setPop} btnValue={popup} heading={'Classes'} p={'You can see your Payments here and manage them'} btn={'Add Class'} />
      <div className={classes.btn_container}>
        <button onClick={() => setNum(0)} className={`${num === 0 ? classes.active : ''}`}>Upcoming Classes</button>
        <button onClick={() => setNum(1)} className={`${num === 1 ? classes.active : ''}`}>Requested Classes</button>
        <button onClick={() => setNum(2)} className={`${num === 2 ? classes.active : ''}`}>Finished Trail Classes</button>
      </div>

      <div className={classes.filter}>
        <div>
          <DateFilter />
          <SortFilter />
        </div>
        <SearchBar cls={classes.sb} />
      </div>


      {switchComp(num)}


    </React.Fragment>
  )
}

export default Classes
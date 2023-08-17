import React, { useState } from 'react'
import PagePath from '../../../Components/PagePath/PagePath'
import classes from './CounselorDetails.module.css'
import Academics from '../../CDOtherPages/Academics/Academics'
import Testing from '../../CDOtherPages/Testing/Testing'
import Activities from '../../CDOtherPages/Activities/Activities'
import Major from '../../CDOtherPages/Major/Major'
import PersonalInfo from '../../CDOtherPages/PersonalInfo/PersonalInfo'

const StudentDetails = () => {

  const [num, setNum] = useState(0)

  function renderFunction(num){
    switch (num) {
      case 0:
        return <Academics />
      case 1:
        return <Testing />
      case 2:
        return <Activities />
      case 3:
        return <Major />
      case 4:
        return <PersonalInfo />
    }
  }
  


  return (
    <React.Fragment>
      <PagePath />
      <div className={classes.btn_container}>
        <button onClick={()=>setNum(0)} className={num===0?classes.active:''}>Academics</button>
        <button onClick={()=>setNum(1)} className={num===1?classes.active:''}>Testing</button>
        <button onClick={()=>setNum(2)} className={num===2?classes.active:''}>Activities</button>
        <button onClick={()=>setNum(3)} className={num===3?classes.active:''}>Major & Career</button>
        <button onClick={()=>setNum(4)} className={num===4?classes.active:''}>Personal Info</button>
      </div>
      {renderFunction(num)}
    </React.Fragment>
  )
}

export default StudentDetails
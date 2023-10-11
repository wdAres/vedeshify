import React from 'react'
import classes from './CommunityLayout.module.css'
import LeftSidebar from './CommunityComp/LeftSidebar/LeftSidebar'
import RightSidebar from './CommunityComp/RightSidebar/RightSidebar'
import MainContainer from './CommunityComp/MainContainer/MainContainer'

const CommunityLayout = (props) => {

  const rednerFunc = (value) => {
    switch (value) {
      case '0vw':
        return classes.show1
      case '-89vw':
        return classes.show2
      case '-178vw':
        return classes.show3
        
    }
  }

  return (
    <div style={{left:`${props.wd}`}} className={`${classes.container}  ${rednerFunc(props.wd)}`}>
        <LeftSidebar />
        <MainContainer />
        <RightSidebar />
    </div>
  )
}

export default CommunityLayout

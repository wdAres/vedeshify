import React from 'react'
import classes from './Community.module.css'
import PagePath from '../../Components/PagePath/PagePath'
import Heading from '../../Components/Heading/Heading'
import CommunityLayout from '../../UI/CommunityLayout/CommunityLayout'

const Community = () => {
  return (
    <React.Fragment>
        <PagePath />
        <Heading heading={'Community'} p={'You can see your schedule here and know your classes'} />
        <CommunityLayout />
    </React.Fragment>
  )
}

export default Community
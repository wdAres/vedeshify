import React from 'react'
import classes from './MainContainer.module.css'
import CommunityHeader from '../../../../Components/CommunityHeader/CommunityHeader'
import CommunityPostCon from '../../../../Components/CommunityPostCon/CommunityPostCon'
import Post from '../../../../Components/Post/Post'

const MainContainer = () => {
  return (
    <div className={`${classes.container} `}>
      <CommunityHeader />
      <CommunityPostCon follow_status={true} >
        <Post />
      </CommunityPostCon>
      <CommunityPostCon >
        <Post />
      </CommunityPostCon>
      <CommunityPostCon >
        <Post />
      </CommunityPostCon>
    </div>
  )
}

export default MainContainer
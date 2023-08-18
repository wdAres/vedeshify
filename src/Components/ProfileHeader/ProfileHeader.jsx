import React from 'react'
import classes from './ProfileHeader.module.css'
import ProfileDiv from '../ProfileDiv/ProfileDiv'

const ProfileHeader = () => {
  return (
    <div className={classes.header}>
        <ProfileDiv />
    </div>
  )
}

export default ProfileHeader
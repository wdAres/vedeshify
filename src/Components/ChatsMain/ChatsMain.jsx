import React from 'react'
import classes from './ChatsMain.module.css'
import Container from '../../UI/Container/Container'
import ChatsHeader from './ChatsMainComp/ChatsHeader/ChatsHeader'
import ChatsFooter from './ChatsMainComp/ChatsFooter/ChatsFooter'

const ChatsMain = (props) => {

  // console.log(props.user)

  return (
    <Container cls={`${classes.container} ${props.value===true?classes.active:""}`}>
      <ChatsHeader userData={props.user} />
      {/* <ChatsHeader /> */}
      <div className={classes.chat_body}>
        <div className={classes.reply}>
          <span className={classes.person}>Puneet Shrivastav</span>
          <p>Hello There!</p>
        </div>
        <div className={classes.response}>
          <p>Hello There!</p>
        </div>
      </div>
      <ChatsFooter />
    </Container>
  )
}

export default ChatsMain
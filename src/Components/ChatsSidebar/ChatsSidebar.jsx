import React from 'react'
import Container from '../../UI/Container/Container'
import classes from './ChatsSidebar.module.css'
import SearchBar from '../SearchBar/SearchBar'
import ChatDp from '../ChatDp/ChatDp'
import ChatBox from '../ChatBox/ChatBox'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getActiveUsers } from '../../store/chatThunk'


const ChatsSidebar = (props) => {

  const dispatch = useDispatch()
  const authDetails = useSelector(state => state.auth)
  const activeUsers = useSelector(state => state.user)



  console.log(authDetails)
  // console.log(activeUsers.users.length);

  // useEffect(() => {
    // dispatch(getActiveUsers(authDetails.data.uid))
  // }, [])

  return (
    <Container cls={classes.sidebar}>
      <SearchBar cls={classes.sb} />
      <div className={classes.active_box}>
        <h3 className={classes.sidebar_heading}>Active</h3>
        <div className={classes.ab_container}>
          {
            activeUsers.users.length > 0 && activeUsers.users.map((element) => (
              <ChatDp key={element.uid} data={element} name={element.name} />
            ))
          }
        </div>
      </div>
      <div className={classes.sidebar_body}>
        <h3 className={classes.sidebar_heading}>Messages <span>40</span></h3>
        <div className={classes.sb_container}>
          <ChatBox activeFnc={props.Func} val={props.value} />
          <ChatBox activeFnc={props.Func} val={props.value} />
          <ChatBox activeFnc={props.Func} val={props.value} />
          <ChatBox activeFnc={props.Func} val={props.value} />
          <ChatBox activeFnc={props.Func} val={props.value} />
          <ChatBox activeFnc={props.Func} val={props.value} />
          <ChatBox activeFnc={props.Func} val={props.value} />
        </div>
      </div>
    </Container>
  )
}

export default ChatsSidebar
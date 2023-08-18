import React from 'react'
import classes from './CommunitySidebar.module.css'
import Container from '../../UI/Container/Container'
import Foldable from '../Foldable/Foldable'


const CommunitySidebar = (props) => {
  return (
    <Container cls={classes.sidebar}>
        <h2 className={classes.heading}>
            # Community
        </h2>
        <div className={classes.body}>
            <Foldable open={true} cls={`${classes.fold} ${classes.cls}`}>
                <h4>Groups</h4>
                <div>
                    <div onClick={()=>props.activeFnc(!props.val)} className={`${classes.tab} ${classes.active_tab}`}>Academics</div>
                    <div onClick={()=>props.activeFnc(!props.val)} className={classes.tab}>Academics</div>
                    <div onClick={()=>props.activeFnc(!props.val)} className={classes.tab}>Academics</div>
                    <div onClick={()=>props.activeFnc(!props.val)} className={classes.tab}>Academics</div>
                </div>
            </Foldable>
            <Foldable cls={`${classes.fold} ${classes.cls2}`}>
                <h4>Events & Video</h4>
                <div>
                    <div onClick={()=>props.activeFnc(!props.val)} className={classes.tab}>Academics</div>
                    <div onClick={()=>props.activeFnc(!props.val)} className={classes.tab}>Academics</div>
                </div>
            </Foldable>
            <Foldable cls={`${classes.fold} ${classes.cls3}`}>
                <h4>Channels</h4>
                <div>
                    <div onClick={()=>props.activeFnc(!props.val)} className={classes.tab}>Academics</div>
                    <div onClick={()=>props.activeFnc(!props.val)} className={classes.tab}>Academics</div>
                    <div onClick={()=>props.activeFnc(!props.val)} className={classes.tab}>Academics</div>
                </div>
            </Foldable>
        </div>
    </Container>
  )
}

export default CommunitySidebar
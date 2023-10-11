import React, { useEffect } from 'react'
import classes from './Community.module.css'

import Heading from '../../Components/Heading/Heading'
import CommunityLayout from '../../UI/CommunityLayout/CommunityLayout'
import { useState } from 'react'

const Community = () => {
  const [wd, setWd] = useState('0vw')


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [wd]);


  return (
    <React.Fragment>
      <section className={classes.section2}>
        <CommunityLayout wd={wd} />
        <div className={classes.wd_controller}>
          <button className={wd === '0vw' ? classes.active : ''} onClick={() => setWd('0vw')}>Community</button>
          <button className={wd === '-89vw' ? classes.active : ''} onClick={() => setWd('-89vw')}>Seed</button>
          <button className={wd === '-178vw' ? classes.active : ''} onClick={() => setWd('-178vw')}>Hashtags</button>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Community
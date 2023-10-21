import React from 'react'
import MapParent from '../../../../Components/MapParent/MapParent'
import EventDiv from '../../../../Components/EventDiv/EventDiv'
import classes from './LeftSidebar.module.css'

const data = [
    {
        id: 1,
        p: 'Videshify',
        h5: 'Figma UI',
        h6: '45 Members'
    },
    {
        id: 1,
        p: 'Videshify',
        h5: 'Altr.js',
        h6: '21 Members'
    },
    {
        id: 1,
        p: 'Videshify',
        h5: 'React',
        h6: '450 Members'
    }

]

const LeftSidebar = () => {
    return (
        <div className={`${classes.sidebar}`}>
            <MapParent heading={'Categories'}>
                {data.map((element, index) => (
                    <EventDiv p={element.p} h5={element.h5} h6={element.h6} key={index} />
                ))}
            </MapParent>
            <MapParent heading={'Events'}>
                {data.map((element, index) => (
                    <EventDiv p={element.p} h5={element.h5} h6={element.h6} key={index} />
                ))}
            </MapParent>
        </div>
    )
}

export default LeftSidebar
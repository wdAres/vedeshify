import React from 'react'
import classes from './RightSidebar.module.css'
import MapParent from '../../../../Components/MapParent/MapParent'

const data = [ 
    {
        span:'Admission',
        p:'456 post'
    },
    {
        span:'Greatness',
        p:'426 post'
    },
    {
        span:'College',
        p:'256 post'
    },
]

const RightSidebar = () => {
    return (
        <div>
            <MapParent heading={'Popular Hashtags today'}>
                {data.map((element, index) => (
                    <div key={index} className={classes.popluar_div}>
                        <span>#{element.span}</span>
                        <p>{element.p}</p>
                    </div>
                ))}
            </MapParent>
        </div>
    )
}

export default RightSidebar
import React from 'react'
import PagePath from '../../../Components/PagePath/PagePath'
import Heading from '../../../Components/Heading/Heading'
import BlackButton from '../../../Components/BlackButton/BlackButton'
import classes from './ServiceDetails.module.css'
import LabelledInput from '../../../Components/LabelledInput/LabelledInput'
import LabelledTextarea from '../../../Components/LabelledTextarea/LabelledTextarea'
import { useNavigate } from 'react-router-dom'

const AddService = () => {

    

    return (
        <React.Fragment>
            <PagePath />
                <Heading cls={classes.heading} heading={'Add Service'} p={'You can see your Services here and manage them'} />
            <div className={classes.flex}>
                <div>
                    <h4 className={classes.heading}>Service Name</h4>
                    <LabelledInput ph={'Service Name'} />
                </div>

                <div>
                    <h4 className={classes.heading}>About the service</h4>
                    <LabelledTextarea ph={'Service Name'} />
                </div>
                

                <div>
                   <h4 className={classes.heading}>What will you take away from this Services ?</h4>
                   <LabelledInput ph={'Videshify'} />
                   <LabelledInput ph={'Videshify'} />
                   <LabelledInput ph={'Videshify'} />
                   <LabelledInput ph={'Videshify'} />
                </div>

                <div>
                   <h4 className={classes.heading}>Pricing</h4>
                   <LabelledInput ph={'Per Session'} />
                   <LabelledInput ph={'Per Hour'} />
                </div>


            </div>
            <div className={classes.end}>
                <butto className={classes.cancel_btn}>Cancel</butto>
                <BlackButton cls={classes.bb}>Add Services</BlackButton>
            </div>
        </React.Fragment>
    )
}

export default AddService

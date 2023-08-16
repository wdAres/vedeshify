import React from 'react'
import classes from './InquiryDetails.module.css'
import PagePath from '../../../Components/PagePath/PagePath'
import Heading from '../../../Components/Heading/Heading'
import LabelledInput from '../../../Components/LabelledInput/LabelledInput'
import BlackButton from '../../../Components/BlackButton/BlackButton'

const inputs = [
  {
    label: 'Name',
    id: 'name'
  },
  {
    label: 'Email',
    id: 'Email'
  },
  {
    label: 'Phone Number',
    id: 'Phone Number'
  },
  {
    label: 'Date and Time',
    id: 'Date and Time'
  },
  {
    label: 'Category',
    id: 'Category'
  }
]

const InquiryDetails = () => {
  return (
    <React.Fragment>
      <PagePath />
      <Heading heading={'Inquiry Details'} p={'See here all your plans made up for students'} />
      <form className={classes.form}>
        {inputs.map((element,index)=>(
          <LabelledInput label={element.label} id={element.id} key={index} />
        ))}
        <div className={classes.txtarea}>
          <label htmlFor="txt">Reason</label>
          <textarea id="txt"></textarea>
        </div>

        <div className={classes.btn_con}>
          <button>Cancel</button>
          <BlackButton>Resolve</BlackButton>
        </div>
      </form>
    </React.Fragment>
  ) 
}

export default InquiryDetails
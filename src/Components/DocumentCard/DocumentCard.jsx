import React from 'react'
import classes from './DocumentCard.module.css'
import { GrDocumentText} from 'react-icons/gr'
import { HiDownload} from 'react-icons/hi'

const DocumentCard = () => {
  return (
    <div className={classes.card}>
        <div>
            <div className={classes.img_container}><GrDocumentText /></div>
            <h6>
                Resources.pdf
            </h6>
        </div>
        <button className={classes.btn}>
            <HiDownload />
        </button>
    </div>
  )
}

export default DocumentCard
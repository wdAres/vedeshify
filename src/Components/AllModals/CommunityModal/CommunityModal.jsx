import React from 'react'
import Modal from '../../Modal/Modal'
import classes from './CommunityModal.module.css'
import BlackButton from '../../BlackButton/BlackButton'
import Heading from '../../Heading/Heading'
import Container from '../../../UI/Container/Container'
import {RxCross2} from 'react-icons/rx'
import {BiChevronDown} from 'react-icons/bi'

import img1  from '../../../assets/youtube.png'
import img2  from '../../../assets/bar-group-03.png'
import img3  from '../../../assets/Icon (1).png'
import img4  from '../../../assets/Icon.png'

const CommunityModal = (props) => {

    return (
        <Modal cls={`${classes.popup}`} value={props.isPopup} Func={props.popupFunc}>
            <div className={classes.top}>
                <Heading cls={classes.reversed} heading={'Add Post'} p={'Upload your exciting post.'} />
            </div>

            <div className={classes.body}>
                <Container cls={classes.body_con}>
                    <p className={`${classes.para} `}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                        unde repudiandae deleniti quibusdam illum pariatur error dolor
                        nesciunt neque quam suscipit excepturi, possimus minus placeat
                        quas eligendi facere quod impedit qui eaque officia, sed
                        voluptates autem omnis. Alias excepturi tempore dolorum,
                        perferendis nostrum aliquid quia laudantium non aliquam, iusto
                        aperiam!
                    </p>
                    <div className={classes.span_container}>
                        <Container cls={`${classes.span}`}>
                            tag1{" "}<RxCross2 />
                        </Container>
                        <Container cls={`${classes.span}`}>
                            tag2{" "}<RxCross2 />
                        </Container>
                    </div>
                </Container>
                <div className={`${classes.df} ${classes.jc}`}>
                    <div className={classes.btns}>
                        <button className={`${classes.df}  ${classes.my_comu_btn}`}>
                            <img src={img4} alt="" />
                        </button>
                        
                        <button className={`${classes.df}  ${classes.my_comu_btn}`}>
                            <img src={img2} alt="" />
                        </button>
                        
                        <button className={`${classes.df}  ${classes.my_comu_btn}`}>
                            <img src={img3} alt="" />
                        </button>
                        
                        <button className={`${classes.df}  ${classes.my_comu_btn}`}>
                            <img src={img1} alt="" />
                        </button>
                        
                    </div>

                    <div>

                    <select className={classes.my_comu_select}>
                        <option value="a">Category</option>
                        <option value="a">Game</option>
                        <option value="a">Informative</option>
                    </select>
                    <select className={classes.my_comu_select}>
                        <option value="a">Privacy</option>
                        <option value="a">Anyone</option>
                        <option value="a">Private</option>
                    </select>
                    </div>
                </div>
            </div>

            <div className={classes.bottom}>
                <button onClick={() => { props.popupFunc(!props.isPopup) }}>Cancel</button>
                <BlackButton>Add Post</BlackButton>
            </div>
        </Modal>
    )
}

export default CommunityModal
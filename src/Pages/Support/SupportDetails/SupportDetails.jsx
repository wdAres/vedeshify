import React from 'react'
import classes from './SupportDetails.module.css'
import PagePath from '../../../Components/PagePath/PagePath'
import Container from '../../../UI/Container/Container'
import ChatsFooter from '../../../Components/ChatsMain/ChatsMainComp/ChatsFooter/ChatsFooter'

const SupportDetails = () => {
  return (
    <React.Fragment>
        <PagePath />
        <Container cls={classes.container}>
            <div className={classes.header}>
                <div>
                    <h3>Ticket Details</h3>
                    <span># 50405</span>
                </div>
                <select>
                    <option value="1">Mark 1</option>
                    <option value="2">Mark 2</option>
                    <option value="3">Mark 3</option>
                </select>
            </div>  
            <div className={classes.middle}>
                <div className={classes.row}>
                    <p>Name</p>
                    <span>Puneet Shrivastav</span>
                </div>
                <div className={classes.row}>
                    <p>Date Created</p>
                    <span>20/08/2023</span>
                </div>
                <div className={classes.row}>
                    <p>Category</p>
                    <span>Other</span>
                </div>
            </div>
            <Container cls={classes.container2}>
                <div className={classes.innter_top}>
                    <div className={classes.response}>
                        <Container cls={classes.con}>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga perspiciatis vel porro, dolore harum et. Ipsa error qui, repudiandae minus laboriosam veritatis!</p>
                        </Container>
                        <div className={classes.message_footer}>
                            <span>20/13/23</span>
                            <span>21/13/23</span>
                        </div>
                    </div>
                    <div className={classes.reply}>
                        <Container cls={classes.con}>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga perspiciatis vel porro, dolore harum et. Ipsa error qui, repudiandae minus laboriosam veritatis!</p>
                        </Container>
                        <div className={classes.message_footer}>
                            <span>20/13/23</span>
                            <span>21/13/23</span>
                        </div>
                    </div>
                    <div className={classes.response}>
                        <Container cls={classes.con}>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga perspiciatis vel porro, dolore harum et. Ipsa error qui, repudiandae minus laboriosam veritatis!</p>
                        </Container>
                        <div className={classes.message_footer}>
                            <span>20/13/23</span>
                            <span>21/13/23</span>
                        </div>
                    </div>
                    <div className={classes.reply}>
                        <Container cls={classes.con}>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga perspiciatis vel porro, dolore harum et. Ipsa error qui, repudiandae minus laboriosam veritatis!</p>
                        </Container>
                        <div className={classes.message_footer}>
                            <span>20/13/23</span>
                            <span>21/13/23</span>
                        </div>
                    </div>
                    <div className={classes.response}>
                        <Container cls={classes.con}>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga perspiciatis vel porro, dolore harum et. Ipsa error qui, repudiandae minus laboriosam veritatis!</p>
                        </Container>
                        <div className={classes.message_footer}>
                            <span>20/13/23</span>
                            <span>21/13/23</span>
                        </div>
                    </div>
                    <div className={classes.reply}>
                        <Container cls={classes.con}>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga perspiciatis vel porro, dolore harum et. Ipsa error qui, repudiandae minus laboriosam veritatis!</p>
                        </Container>
                        <div className={classes.message_footer}>
                            <span>20/13/23</span>
                            <span>21/13/23</span>
                        </div>
                    </div>
                    <div className={classes.response}>
                        <Container cls={classes.con}>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga perspiciatis vel porro, dolore harum et. Ipsa error qui, repudiandae minus laboriosam veritatis!</p>
                        </Container>
                        <div className={classes.message_footer}>
                            <span>20/13/23</span>
                            <span>21/13/23</span>
                        </div>
                    </div>
                    <div className={classes.reply}>
                        <Container cls={classes.con}>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga perspiciatis vel porro, dolore harum et. Ipsa error qui, repudiandae minus laboriosam veritatis!</p>
                        </Container>
                        <div className={classes.message_footer}>
                            <span>20/13/23</span>
                            <span>21/13/23</span>
                        </div>
                    </div>
                </div>
                <div className={classes.innter_bottom}>
                <ChatsFooter />
                </div>
            </Container>
        </Container>
    </React.Fragment>
  )
}

export default SupportDetails
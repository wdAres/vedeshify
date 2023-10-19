import React, { useRef, useState } from "react";
import classes from "./InquiryDetails.module.css";
import PagePath from "../../../Components/PagePath/PagePath";
import Heading from "../../../Components/Heading/Heading";
import Container from "../../../UI/Container/Container";


const InquiryDetails = () => {

  return (
    <React.Fragment>
      <PagePath />
      <Heading cls={classes.heading} heading={'Inquiry Details'} p={'You can see your Inquirys here and manage them'} />
      <div className={classes.details_box}>
        <div className={classes.row}>
          <h4 className={classes.h4}>Student Name  :</h4> <span className={classes.span}>Puneet Shrivastav</span>
        </div>
        <div className={classes.row}>
          <h4 className={classes.h4}>Date of Query  :</h4> <span className={classes.span}>20/18/2023</span>
        </div>
        <div className={classes.row}>
          <h4 className={classes.h4}>Category  :</h4> <span className={classes.span}>Career Counseling</span>
        </div>
      </div>
      <Container cls={classes.container}>
        <div className={classes.box}>
          <div className={classes.row}>
            <h4 className={classes.h4}>Student Query</h4>
            <span className={classes.span}>Date : 13/08/2023</span>
          </div>
          <p className={classes.p}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem vero nisi sint optio iusto, ab facere commodi excepturi dolorum, repellat quia voluptatem maxime! Rerum dignissimos ipsum assumenda itaque necessitatibus ullam blanditiis non molestias odio? Quis, eius aspernatur deserunt accusantium ut reiciendis voluptates hic, harum porro libero iusto quisquam qui. Earum!
          </p>
        </div>
        <div className={classes.box}>
          <div className={classes.row}>
            <h4 className={classes.h4}>Your Reply</h4>
            <span className={classes.span}>Date : 13/08/2023</span>
          </div>
          <p className={classes.p}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem vero nisi sint optio iusto, ab facere commodi excepturi dolorum, repellat quia voluptatem maxime! Rerum dignissimos ipsum assumenda itaque necessitatibus ullam blanditiis non molestias odio? Quis, eius aspernatur deserunt accusantium ut reiciendis voluptates hic, harum porro libero iusto quisquam qui. Earum!
          </p>
        </div>

        <div className={classes.btns}>
          <button>Apply Another Reply</button>
          <button>Edit Your Reply</button>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default InquiryDetails;

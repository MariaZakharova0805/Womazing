import React, { useSte } from "react";
import classes from "./ContactPhone.module.css";

const ContactPhone = () => {
  return (
    <div>
      <a href="tel:+74958235412" className={classes.phone}>
        <span className={classes.phone_icon}>
          <i className="icon-phone-outline"></i>
        </span>
        <p className={classes.phone_number}>+7 (495) 823-54-12</p>
      </a>
    </div>
  );
};

export default ContactPhone;

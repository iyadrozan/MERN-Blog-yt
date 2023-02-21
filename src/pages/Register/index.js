import React from "react";
import { RegisterBg } from "../../assets";
import { Button, DLink, Gap, Input } from "../../components";
import "./register.scss";

const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" alt="Background" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Full Name" placeholder="Full Name" />
        <Gap height={18} />
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={37} />
        <Button title="Register" />
        <Gap height={90} />
        <DLink title="Kembali Ke Home" to="/" />
      </div>
    </div>
  );
};

export default Register;

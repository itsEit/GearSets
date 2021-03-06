import React, { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { login } from "../../api/gearApi";
import "./Login.css";

const Login = (props) => {
  const [loginDisplay, setLoginDisplay] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);

  useEffect(() => {
    let lastDT = new Date(localStorage.getItem("gs:lastLogin")).getTime() + 3600000;
    let currDT = new Date().getTime();
    if (currDT < lastDT) {
      let loginInfo = {}
      loginInfo.userID = localStorage.getItem("gs:userID")
      loginInfo.userName = localStorage.getItem("gs:userName")
      props.userLogin(loginInfo)
    } else {
      localStorage.removeItem("gs:userID");
      localStorage.removeItem("gs:lastLogin");
      localStorage.removeItem("gs:userName");
      setLoginDisplay(true);
    }
  }, []);

  const submitForm = async () => {
    let frmData = {};
    frmData.userName = userName;
    frmData.userPass = userPassword;
    const loginInfo = await login(frmData).then((res) => {
      return res.data;
    });
    if (loginInfo.message === "User not Found") {
      setIsFormValid(false);
      return;
    } else {
      props.userLogin(loginInfo);
      localStorage.setItem("gs:userID", loginInfo.userID);
      localStorage.setItem("gs:userName", loginInfo.userName);
      localStorage.setItem("gs:lastLogin", new Date());
      setIsFormValid(false);
      setLoginDisplay(false);
    }
  };

  const header = <div className="p-mt-0">Login</div>;
  const footer = (
    <div>
      <Button className="primary" label="Submit" onClick={submitForm} />
    </div>
  );
  const formError = (message) => {
    return !isFormValid && <small className="p-field p-error">Invalid Credentials, try again</small>;
  };

  return (
    <div className="dialog-login">
      <div className="card">
        <Dialog draggable={false} header={header} footer={footer} visible={loginDisplay} closable={false}>
          <div className="card ">
            <div className="p-field">
              <label htmlFor="username" className="p-d-block">
                Username
              </label>
              <InputText
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                id="username"
                aria-describedby="username-help"
                className="p-d-block"
              />
            </div>
            <div className="p-field">
              <label htmlFor="password" className="p-d-block">
                Password
              </label>
              <InputText
                value={userPassword}
                onChange={(e) => {
                  setUserPassword(e.target.value);
                }}
                id="password"
                aria-describedby="password-help"
                className="p-d-block"
              />
            </div>
            <div>{formError("password")}</div>
            <small>
              New User? <a href="./">Click Here to Sign up</a>
            </small>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default Login;

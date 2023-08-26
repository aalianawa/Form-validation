import React, { useState } from "react";
import "./faceBook.css";

const FaceBook = () => {
  const [firstName, setFirstName] = useState("");
  const [nameMesg, setNameMesg] = useState("Enter Your first name here");
  const [showFirstNameError, setShowFirstNameError] = useState(false);
  const [surName, setSurName] = useState("");
  const [showSurNameError, setShowSurNameError] = useState(false);

  const [successMesg, setSuccessMesg] = useState("Enter Your sur name here");

  const [userEmial, setUserEmail] = useState("");
  const [showUserEmailError, setShowUserEmailError] = useState(false)
  const [emailMesg, setEmailMesg] = useState("Enter Your valid Email.");

  const [userPassword, setUserPassword] = useState("");
  const [showUserPasswordError, setShowUserPasswordError] = useState(false)
  const [passwordMesg, setPasswordMesg] = useState( "Enter Your valid password");

  // console.log(nameMesg);

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);

    if(firstName !== ""){
      setNameMesg("Looks Good!");
    }
  };

  const surNameHandler = (e) => {
    setSurName(e.target.value);


    if(surName !== ""){
      setSuccessMesg("Looks Good!");
    }
  };

  const userEmialHandler = (e) => {
    setUserEmail(e.target.value);
    if(userEmial !== ""){
      setEmailMesg("Looks Good!");
    }
  };

  const userPasswordHandler = (e) => {
    setUserPassword(e.target.value);

    if (userPassword !== ""){
   
      setPasswordMesg("Looks Good!");
    }
  };





  const userFormSubmitHandler = (e) => {

     e.preventDefault ()
    if (firstName === "") {
      setShowFirstNameError(true)
   
    }

    if (surName === "") {
        setShowSurNameError(true);

     
    }

    if (userEmial ==="") {
        setShowUserEmailError(true);

      
        
    }
    if (userPassword === "") {
        setShowUserPasswordError(true);

     
    }
  };

  return (
    <div className="body">
      <div className="">
        <div className=" bg-fb-blue py-5">
          <div className="container">
            <h1 className="logo text-center fw-bold mt-5">facebook</h1>

            <div className=" no-gutters text-center justyfy-content-center mt-5 wrapper">
              <form onSubmit={userFormSubmitHandler} className="">
                <div className="">
                  <h2 className="text-center">Create a new account</h2>
                  <span>It's quick and easy.</span>
                  <hr />
                </div>

                <div className="filed-input">
                  <div className="form-row">
                    <div className=" d-flex justyfy-content-between ">
                      <input
                        value={firstName}
                        onChange={firstNameHandler}
                        type="text"
                        className="form-control form-control-sm mb-2"
                        id="Name"
                        placeholder="Name"
                      />
                      {showFirstNameError && (<p className={'${nameMesg === "Looks Good!" ? "text-success" : "text-danger"} fw-bold'}>
                          {nameMesg}
                        </p>
                      )}

                      <input
                        value={surName}
                        onChange={surNameHandler}
                        type="text"
                        className="form-control form-control-sm mb-2"
                        id="Surname"
                        placeholder="Surname"
                      />
                      {showSurNameError && (
                        <p className={'${successMesg === "Looks Good!" ? "text-success" : "text-danger"} fw-bold'}>{successMesg}</p>
                      )}
                    </div>

                    <div className="col-auto mt-4">
                      <input
                        value={userEmial}
                        onChange={userEmialHandler}
                        type="text"
                        className="form-control form-control-sm mb-2"
                        id="emailPhone"
                        placeholder="Email or Phone"
                      />
                      {showUserEmailError && (
                        <p className={'${emailMesg === "Looks Good!" ? "text-success" : "text-danger"} fw-bold'}>{emailMesg}</p>
                      )}
                    </div>
                    <div className="col-auto mt-4">
                      <div className="col-auto mb-3">
                        <input
                          value={userPassword}
                          onChange={userPasswordHandler}
                          type="text"
                          className="form-control form-control-sm"
                          id="password"
                          placeholder="Password"
                        />
                        {showUserPasswordError && (
                          <p className={'${passwordMesg === "Looks Good!" ? "text-danger" : "text-success"} fw-bold'}>{passwordMesg}
                          </p>
                        )}
                      </div>
                    </div>
                   
                    <div className="col-auto">
                      <button
                        type="submit"
                        id="submit"
                        className="btn btn-sm btn-fb mb-3 align-bottom px-4 text-white text-center"
                      >
                        Sign up
                      </button>

                      <div classname="signup-link">
                        Already have a account?<a href="#"> Sign up Now</a>
                      </div>

                     
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceBook;

import { useState } from "react";
import { useRef } from "react";
import persoimg from "../accets/iconsPerson.png";

export const FormValidation = ({ setShowPages, setUserSubmited }) => {
  const [register, setregister] = useState(false);
  const [invalidInf, setInvalidInf] = useState(false);
  const [invalidConfirm, setinvalidConfirm] = useState(false);
  const [alredyExistUser, setalredyExistUser] = useState(false);
  const userRef = useRef(null);
  const passwordRef = useRef(null);
  const ConfirnPasswordRef = useRef(null);
  let allUsers = [];
  let found = {};

  function handelSignUp() {
    setregister((prv) => (prv ? false : true));
  }

  function handelSignIn() {
    allUsers = JSON.parse(window.localStorage.getItem("allUsers"));
    // console.log("!@#", allUsers[0].name);
    found = allUsers.find(
      (user) =>
        user.name == userRef.current.value &&
        user.Password == passwordRef.current.value
    );

    if (found) {
      console.log("well come to your page");
      setUserSubmited(found);
      setShowPages([false, true, false, false]);
    } else {
      setInvalidInf(true);
      setTimeout(() => {
        setInvalidInf(false);
      }, "5000");
    }
  }

  function handelSubmit() {
    allUsers = JSON.parse(window.localStorage.getItem("allUsers")) || [];
    console.log("allUsers", allUsers);
    found = allUsers.find(
      (user) =>
        user.name == userRef.current.value &&
        user.Password == passwordRef.current.value
    );

    if (
      found &&
      ConfirnPasswordRef.current.value == passwordRef.current.value
    ) {
      //   console.log("error for user that alredy exist");
      setalredyExistUser(true);
      setTimeout(() => {
        setalredyExistUser(false);
        setregister(false);
      }, "5000");
    } else if (ConfirnPasswordRef.current.value == passwordRef.current.value) {
      //   console.log("new user");
      allUsers.push({
        id: `${allUsers.length}`,
        name: `${userRef.current.value}`,
        Password: `${passwordRef.current.value}`,
        firstName: ``,
        lastName: ``,
        nationalCod: ``,
        PhonNumber: ``,
        BirthsDate: ``,
      });
      window.localStorage.setItem("allUsers", JSON.stringify(allUsers));
      setregister(false);
    } else {
      //   console.log("password reapid is incorrect");
      setinvalidConfirm(true);
      setTimeout(() => {
        setinvalidConfirm(false);
      }, "5000");
    }
  }

  return (
    <div className="mainSecttion">
      <div className="ValidationPage">
        <div className="divImg">
          <img className="imgTag" src={persoimg} />
        </div>
        <label className="LabelTag">
          UserName <span className="SpanStar">*</span>
        </label>
        <input className="inputTag" ref={userRef} />
        {invalidInf && (
          <div className="invalidInformation">UserName is invalid</div>
        )}

        <div className="divInput">
          <label className="LabelTag">
            Pasword <span className="SpanStar">*</span>
          </label>
          <input className="inputTag" ref={passwordRef} type="Password" />
          {invalidInf && (
            <div className="invalidInformation">Pasword is invalid</div>
          )}
        </div>

        {!register && (
          <div className="divButtens">
            <button className="SignInButton" onClick={handelSignIn}>
              Sign in
            </button>
            <button className="SignInButton" onClick={handelSignUp}>
              Sign up
            </button>
          </div>
        )}

        {register && (
          <>
            <label className="LabelTag">
              Confirm Pasword <span className="SpanStar">*</span>
            </label>
            <input
              className="inputTag"
              ref={ConfirnPasswordRef}
              type="Password"
            />
            {invalidConfirm && (
              <div className="invalidInformation">
                Password dose'nt reapet correctly
              </div>
            )}
            {alredyExistUser && (
              <div className="invalidInformation">
                This User and Password alredy exist
              </div>
            )}
            <div className="divButtens">
              <button className="SignInButton" onClick={handelSubmit}>
                Submit
              </button>
              <button className="SignInButton" onClick={handelSignUp}>
                Sign in
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

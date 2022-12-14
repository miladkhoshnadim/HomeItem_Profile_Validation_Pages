// import personimg from "../accets/iconsPerson.png";
import optionImg from "../accets/menub.png";
import flowerImg from "../accets/download.jpg";
import { useState } from "react";
import { NavbarPage } from "../ItemPage/NavbarPages";

export const InformationPage = ({ UserSubmited, setShowPages }) => {
  let AllUsers = [];

  const [inputInformation, setInputInformation] = useState(UserSubmited);

  function handleInputChenge(e) {
    setInputInformation((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSaveChenge() {
    AllUsers = JSON.parse(window.localStorage.getItem("allUsers"));
    AllUsers[UserSubmited.id] = inputInformation;
    console.log("AllUsers", AllUsers);
    window.localStorage.setItem("allUsers", JSON.stringify(AllUsers));
  }

  return (
    <div className="divMainPageTwo">
      <NavbarPage setShowPages={setShowPages} UserSubmited={inputInformation} />
      {/* <div className="navbarDiv">
        <div className="UserInfo">
          <div className="divImgPersonProf">
            <img className="imgTag" src={personimg} />
          </div>
          <span>Username</span>
        </div>
        <span>Home</span>
        <span>Profile</span>
        <span>Items</span>
      </div> */}
      <div className="DivRightSection">
        <div className="divOptionImg">
          <img src={optionImg} />
        </div>
        <div className="SubSectionRight">
          <div className="ProfileImg">
            <img className="ImagePerson" src={flowerImg} />
            <div className="EmptySghere">
              <div className="EmptySgherePluse">+</div>
            </div>
          </div>
          <div className="PersonInfoDetail">
            <div className="LeftPersonInfo">
              <label className="LabelTagInfoF">
                First Name <span className="SpanStar">*</span>
              </label>
              <input
                className="inputTag"
                value={inputInformation.firstName}
                name="firstName"
                onChange={handleInputChenge}
              />
              <label className="LabelTagInfo">
                Phone Number <span className="SpanStar">*</span>
              </label>
              <input
                className="inputTag"
                value={inputInformation.PhonNumber}
                name="PhonNumber"
                onChange={handleInputChenge}
              />
              <label className="LabelTagInfo">
                Birth Date <span className="SpanStar">*</span>
              </label>
              <input
                className="inputTag"
                value={inputInformation.BirthsDate}
                name="BirthsDate"
                onChange={handleInputChenge}
              />
            </div>
            <div className="LeftPersonInfo">
              <label className="LabelTagInfoF">
                Last Name <span className="SpanStar">*</span>
              </label>
              <input
                className="inputTag"
                value={inputInformation.lastName}
                name="lastName"
                onChange={handleInputChenge}
              />
              <label className="LabelTagInfo">
                National Code <span className="SpanStar">*</span>
              </label>
              <input
                className="inputTag"
                value={inputInformation.nationalCod}
                name="nationalCod"
                onChange={handleInputChenge}
              />
              <label className="LabelTagInfo">
                SKills <span className="SpanStar">*</span>
              </label>
              <select className="inputTag">
                <option>Select</option>
                <option>Programing</option>
                <option>Codiing</option>
                <option>Designing</option>
                <option>Others</option>
              </select>
            </div>
          </div>
          <div className="SaveChenge">
            <button className="buttenSave" onClick={handleSaveChenge}>
              Save Chenge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

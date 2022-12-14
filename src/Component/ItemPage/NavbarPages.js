import personimg from "../accets/iconsPerson.png";

export const NavbarPage = ({ setShowPages, UserSubmited }) => {
  function handelToHome() {
    setShowPages([false, false, false, true]);
  }

  function handelToItems() {
    setShowPages([false, false, true, false]);
  }

  function handelToProfile() {
    setShowPages([false, true, false, false]);
  }

  return (
    <div className="navbarDiv">
      <div className="UserInfo">
        <div className="divImgPersonProf">
          <img className="imgTag" src={personimg} />
        </div>
        <span>
          {UserSubmited.firstName}
          {UserSubmited.lastName}
        </span>
      </div>
      <span onClick={handelToHome} className="Pointer">
        Home
      </span>
      <span onClick={handelToProfile} className="Pointer">
        Profile
      </span>
      <span onClick={handelToItems} className="Pointer">
        Items
      </span>
    </div>
  );
};

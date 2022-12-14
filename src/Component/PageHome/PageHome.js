import { NavbarPage } from "../ItemPage/NavbarPages";
import optionImg from "../accets/menub.png";
import SyrcleImg from "../accets/Syrcle.jpg";
import MileeDiagram from "../accets/mileee.png";
import LineerDiagram from "../accets/lineer.jpg";
import LineerTowDiagram from "../accets/mileeee.png";

export const PageHome = ({ setShowPages, UserSubmited }) => {
  return (
    <div className="divMainPageTwo">
      <NavbarPage setShowPages={setShowPages} UserSubmited={UserSubmited} />
      <div className="DivRightSection">
        <div className="divOptionImg">
          <img src={optionImg} />
        </div>
        <div className="SubSectionRight">
          <div className="SubjectPageForm">Home</div>
          <section>
            <div className="DiveImgDiagram">
              <img src={SyrcleImg} />
              <img src={MileeDiagram} />
            </div>
            <div className="DiveImgDiagram">
              <img src={LineerTowDiagram} />
              <img src={LineerDiagram} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

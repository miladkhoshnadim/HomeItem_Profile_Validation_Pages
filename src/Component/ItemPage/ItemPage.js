import { useEffect, useState } from "react";
import optionImg from "../accets/menub.png";
import { InputLabelTag } from "./InputLabelTag";
import { NavbarPage } from "./NavbarPages";
import { TabelHeader } from "./TabelHeader";
import { TabelItems } from "./TabelItem";

export const ItemPage = ({ setShowPages, UserSubmited }) => {
  let items = [];
  const [allItemVal, setAllItemVal] = useState(items);

  const [inputItemVal, setInputItemVal] = useState({
    Name: "",
    Account: "",
    Category: "",
    FormData: "",
    ToDate: "",
    FromFax: "",
    ToFax: "",
  });

  useEffect(() => {
    items = JSON.parse(window.localStorage.getItem("allItems")) || [];
    setAllItemVal(items);
  }, []);

  function handleSubmitInput() {
    items = JSON.parse(window.localStorage.getItem("allItems")) || [];
    items.push(inputItemVal);
    setAllItemVal(items);
    console.log("items", items);
    window.localStorage.setItem("allItems", JSON.stringify(items));
  }

  return (
    <div className="divMainPageTwo">
      <NavbarPage setShowPages={setShowPages} UserSubmited={UserSubmited} />
      <div className="DivRightSection">
        <div className="divOptionImg">
          <img src={optionImg} />
        </div>
        <div className="SubSectionRight">
          <div className="SubjectPageForm">Form</div>
          <section className="SectionInputPageItem">
            <InputLabelTag label="Name" setInputItemVal={setInputItemVal} />
            <InputLabelTag label="Account" setInputItemVal={setInputItemVal} />
            <InputLabelTag label="Category" setInputItemVal={setInputItemVal} />
            <InputLabelTag label="FormData" setInputItemVal={setInputItemVal} />
            <InputLabelTag label="ToDate" setInputItemVal={setInputItemVal} />
            <InputLabelTag label="FromFax" setInputItemVal={setInputItemVal} />
            <InputLabelTag label="ToFax" setInputItemVal={setInputItemVal} />
            <div className="divInputPageItems">
              <button className="SubmitForm" onClick={handleSubmitInput}>
                Submited
              </button>
            </div>
          </section>
        </div>
        <section className="TabelSection">
          <TabelHeader />
          {allItemVal.map((Item, i) => (
            <TabelItems
              key={i}
              classes={i % 2 == 0 ? "RowTable" : "RowTable backgrondRows"}
              item={Item}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

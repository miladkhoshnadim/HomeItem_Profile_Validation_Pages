import "./App.css";
import { FormValidation } from "./Component/ValidationPage/validation";
import { useState } from "react";
import { InformationPage } from "./Component/InformationPage/InformationPage";
import { ItemPage } from "./Component/ItemPage/ItemPage";
import { PageHome } from "./Component/PageHome/PageHome";

function App() {
  const [showPages, setShowPages] = useState([true, false, false, false]);
  const [UserSubmited, setUserSubmited] = useState({});
  return (
    <>
      {showPages[0] && (
        <FormValidation
          setShowPages={setShowPages}
          setUserSubmited={setUserSubmited}
        />
      )}
      {showPages[1] && <InformationPage UserSubmited={UserSubmited} setShowPages={setShowPages} />}
      {showPages[2] && <ItemPage UserSubmited={UserSubmited} setShowPages={setShowPages} />}
      {showPages[3] && <PageHome UserSubmited={UserSubmited} setShowPages={setShowPages}/>}
    </>
  );
}

export default App;

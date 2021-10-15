import React, { useEffect } from "react";

const ChangeTitle = () => {
  const [sayac, setSayac] = useState(0);
  const artir = () => {
    setSayac(sayac + 1);
  };
  

  return (
    <div>
      <h2>{sayac} kere tikladin </h2>
      <button onclick={artir}>TIKLA</button>
    </div>
  );
};

export default ChangeTitle;

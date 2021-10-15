import React, { useState } from "react";
import { Button } from "react-bootstrap";

//ilk olarak useState import edilmeli

const State = () => {
  //2.useState tanimlanmali
  //sayac degiskeni degeri saklar.setSayac ise degeri degistiren metoddur.

  const [sayac, setSayac] = useState(0);
  const artir = () => {
    setSayac(sayac+1);
  }

/*
var sayac = 0;
const artir = () =>{
    sayac=sayac+1;
    console.log(sayac);//kod console da calisir ama render edilmediginden görünmez

}*/

  return (
    <div>
      <h1>Sayac degeri : {sayac}</h1>
      <Button variant="info" onClick={artir}>Artir</Button>
    </div>
  );
};

export default State;

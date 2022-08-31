import React from "react";
import './RTE.scss';
import Bold from "./Bold/Bold";
import Italic from "./Italic/Italic";
import Strike from "./Strike/Strike";



function RTE() {

  return (
    <div className="rte">
      <div className="rte__container">
        <div className="rte__container-toolbox">
          <Bold/>
          <Italic/>
          <Strike/>        
        </div>
      </div>
      <div
        className="rte__inputcontent"
        contentEditable={true}
      >
      </div>
    </div>
  );
}

export default RTE;

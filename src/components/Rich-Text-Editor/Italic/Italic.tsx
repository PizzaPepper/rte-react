import React from "react";
import '../Options.scss'

function Italic() {

  const onHandleItalic = () => {
    document.execCommand("italic",false);
  }


  return (
    <button className="option" id="italic" onClick={onHandleItalic}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="bi bi-type-italic"
        viewBox="0 0 16 16"
      >
        <path d="M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z" />
      </svg>
    </button>
  );
}

export default Italic;

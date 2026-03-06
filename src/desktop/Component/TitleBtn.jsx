import React from "react";

const TitleBtn = ({ label, onClick, isClose }) => {
   return (
      <button
         className={`title_btn ${isClose ? " title_btn_close" : ""}`}
         onClick={onClick}
      >
         {label}
      </button>
   );
};

export default TitleBtn;

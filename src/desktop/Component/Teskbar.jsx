import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";

const Teskbar = ({node, windowOpen, visible, setVisible}) => {
  const [time, setTime] = useState(new Date());

   // 시계
   useEffect(() => {
      const t = setInterval(() => setTime(new Date()), 1000);
      return () => clearInterval(t);
   }, []);

   const fmt = (n) => String(n).padStart(2, "0");
   const hours24 = time.getHours();
   const ampm = hours24 < 12 ? "오전" : "오후";
   const hours12 = hours24 % 12 || 12;

   const clockStr = `${ampm} ${hours12}:${fmt(time.getMinutes())}`;
   const dateStr = `${time.getFullYear()}-${fmt(time.getMonth() + 1)}-${fmt(time.getDate())}`;

   return (
      <div>
         <div className="taskbar">
            <div className="taskbar_icon">
              <FontAwesomeIcon icon={faMicrosoft} />
            </div>

            {windowOpen && (
               <button
                  className={`taskbar_btn${visible ? " taskbar_btn_active" : ""}`}
                  onClick={() => setVisible((v) => !v)}
               >
                  <span>📁</span> {node?.name || "폴더"}
               </button>
            )}

            <div className="taskbar_clock">
               <div>{clockStr}</div>
               <div className="taskbar_clock_date">{dateStr}</div>
            </div>
         </div>
      </div>
   );
};

export default Teskbar;

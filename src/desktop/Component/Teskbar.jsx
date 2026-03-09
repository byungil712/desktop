import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import folder from "/img/folder.png";
import folder11 from "/img/folder11.webp";

const Teskbar = ({ node, windowOpen, visible, setVisible }) => {
   const [time, setTime] = useState(new Date());
   const [showCal, setShowCal] = useState(false);
   const [calDate, setCalDate] = useState(new Date());

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

   // 캘린더 날짜
   const year = calDate.getFullYear();
   const month = calDate.getMonth(); 

   const firstDay = new Date(year, month, 1).getDay();
   const lastDate = new Date(year, month + 1, 0).getDate(); 

   // 캘린더 배열
   const cells = [];
   for (let i = 0; i < firstDay; i++) cells.push(null); 
   for (let d = 1; d <= lastDate; d++) cells.push(d);

   const today = new Date();
   const isToday = (d) =>
      d === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();

   const prevMonth = () => setCalDate(new Date(year, month - 1, 1));
   const nextMonth = () => setCalDate(new Date(year, month + 1, 1));

   return (
      <>
         {/* 캘린더 팝업 */}
         {showCal && (
            <div className="calendar">
               {/* 헤더 */}
               <div className="calendar_header">
                  <button className="calendar_nav" onClick={prevMonth}>
                     ‹
                  </button>
                  <span className="calendar_title">
                     {year}년 {month + 1}월
                  </span>
                  <button className="calendar_nav" onClick={nextMonth}>
                     ›
                  </button>
               </div>

               {/* 요일 */}
               <div className="calendar_grid">
                  {["일", "월", "화", "수", "목", "금", "토"].map((d) => (
                     <div key={d} className="calendar_weekday">
                        {d}
                     </div>
                  ))}

                  {/* 날짜 */}
                  {cells.map((d, i) => (
                     <div
                        key={i}
                        className={`calendar_day ${d === null ? "calendar_day_empty" : ""} ${isToday(d) ? "calendar_day_today" : ""}`}
                     >
                        {d}
                     </div>
                  ))}
               </div>
            </div>
         )}

         <div className="taskbar">
            <div className="taskbar_icon">
               <FontAwesomeIcon icon={faMicrosoft} />
            </div>

            {windowOpen && (
               <button
                  className={`taskbar_btn${visible ? " taskbar_btn_active" : ""}`}
                  onClick={() => setVisible((v) => !v)}
               >
                  <span>
                     <img src={node?.icon || folder11} />
                  </span>
                  {node?.name || "폴더"}
               </button>
            )}

            <div className="taskbar_clock" onClick={() => setShowCal(v => !v)}>
               <div>{clockStr}</div>
               <div>{dateStr}</div>
            </div>
         </div>
      </>
   );
};

export default Teskbar;

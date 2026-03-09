import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import folder11 from "/img/folder11.webp";
import pc11 from "/img/pc11.avif";
import file from "/img/file.png";

const Teskbar = ({
   node,
   openFolder,
   openNote,
   windowOpen,
   visible,
   setVisible,
}) => {
   const [time, setTime] = useState(new Date());
   const [showCal, setShowCal] = useState(false);
   const [calDate, setCalDate] = useState(new Date());
   const [showStart, setShowStart] = useState(false);
   const [showThanks, setShowThanks] = useState(false)

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

   const pinnedApps = [
      { icon: pc11, name: "내 PC", onClick: () => openFolder("root") },
      { icon: folder11, name: "About Me", onClick: () => openFolder("about") },
      {
         icon: folder11,
         name: "Project",
         onClick: () => openFolder("projects"),
      },
      { icon: folder11, name: "Contact", onClick: () => openFolder("contact") },
      { icon: file, name: "메모장", onClick: () => openNote() },
   ];

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
            <div
               className="taskbar_icon"
               onClick={() => setShowStart((v) => !v)}
            >
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

            {showStart && (
               <div className="start_menu">
                  <div className="start_section_title">
                     <span>고정됨</span>
                  </div>
                  <div className="start_pinned">
                     {pinnedApps.map((app) => (
                        <div
                           key={app.name}
                           className="start_app"
                           onClick={() => {
                              app.onClick();
                              setShowStart(false);
                           }}
                        >
                           <div className="start_app_icon">
                              <img src={app.icon} />
                           </div>
                           <div className="start_app_name">{app.name}</div>
                        </div>
                     ))}
                  </div>
                  <div className="start_power">
                     <button type="button" onClick={() => setShowThanks((v) => !v)}>
                        <FontAwesomeIcon icon={faPowerOff} />
                        <span>시스템 종료</span>
                     </button>
                  </div>
               </div>
            )}

            <div
               className="taskbar_clock"
               onClick={() => setShowCal((v) => !v)}
            >
               <div>{clockStr}</div>
               <div>{dateStr}</div>
            </div>
         </div>

         {
            showThanks && (
               <div className="thanks">
                  <div className="thanks_text">
                     <h3>Thanks for Watching</h3>
                  </div>
                  <div className="thanks_close">
                     <button type="button" onClick={() => setShowThanks((v) => !v)}>닫기</button>
                  </div>
               </div>
            )
         }
      </>
   );
};

export default Teskbar;

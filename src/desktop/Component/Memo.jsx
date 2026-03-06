import React, { useEffect, useRef, useState } from "react";
import TitleBtn from "./TitleBtn";

const Memo = ({ visible, onClose, rect, setRect }) => {
   // 메모장 내부 state
   const [content, setContent] = useState(
      () => localStorage.getItem("notepad_content") || "",
   );

   const dragging = useRef(false);
   const dragOffset = useRef({ x: 0, y: 0 });
   const resizing = useRef(false);
   const resizeDir = useRef("");
   const resizeStart = useRef({});

   // 저장
   const save = () => {
      localStorage.setItem("notepad_content", content);
      alert("저장되었습니다!");
   };

   // 타이틀바 드래그
   const onTitleMouseDown = (e) => {
      dragging.current = true;
      dragOffset.current = {
         x: e.clientX - rect.left,
         y: e.clientY - rect.top,
      };
      e.preventDefault();
   };

   // 터치 드래그
   const onTitleTouchStart = (e) => {
      const touch = e.touches[0];
      dragging.current = true;
      dragOffset.current = {
         x: touch.clientX - rect.left,
         y: touch.clientY - rect.top,
      };
   };

   // 리사이즈 핸들 (마우스)
   const onResizeMouseDown = (dir) => (e) => {
      resizing.current = true;
      resizeDir.current = dir;
      resizeStart.current = { x: e.clientX, y: e.clientY, ...rect };
      e.preventDefault();
      e.stopPropagation();
   };

   // 리사이즈 핸들 (터치)
   const onResizeTouchStart = (dir) => (e) => {
      const touch = e.touches[0];
      resizing.current = true;
      resizeDir.current = dir;
      resizeStart.current = { x: touch.clientX, y: touch.clientY, ...rect };
      e.stopPropagation();
   };

   useEffect(() => {
      const onMove = (e) => {
         const clientX = e.touches ? e.touches[0].clientX : e.clientX;
         const clientY = e.touches ? e.touches[0].clientY : e.clientY;

         // 창 이동
         if (dragging.current) {
            let x = clientX - dragOffset.current.x;
            let y = clientY - dragOffset.current.y;
            x = Math.max(0, Math.min(x, window.innerWidth - rect.width));
            y = Math.max(0, Math.min(y, window.innerHeight - rect.height));
            setRect((r) => ({ ...r, left: x, top: y }));
         }

         // 창 리사이즈
         if (resizing.current) {
            const { x, y, left, top, width, height } = resizeStart.current;
            const dx = clientX - x;
            const dy = clientY - y;
            const dir = resizeDir.current;
            const minW = 300,
               minH = 200;
            let nl = left,
               nt = top,
               nw = width,
               nh = height;

            if (dir.includes("e")) nw = Math.max(minW, width + dx);
            if (dir.includes("s")) nh = Math.max(minH, height + dy);
            if (dir.includes("w")) {
               nw = Math.max(minW, width - dx);
               nl = left + (width - nw);
            }
            if (dir.includes("n")) {
               nh = Math.max(minH, height - dy);
               nt = top + (height - nh);
            }
            setRect({ left: nl, top: nt, width: nw, height: nh });
         }
      };

      const onUp = () => {
         dragging.current = false;
         resizing.current = false;
      };

      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseup", onUp);
      window.addEventListener("touchmove", onMove);
      window.addEventListener("touchend", onUp);
      return () => {
         window.removeEventListener("mousemove", onMove);
         window.removeEventListener("mouseup", onUp);
         window.removeEventListener("touchmove", onMove);
         window.removeEventListener("touchend", onUp);
      };
   }, [rect.width, rect.height]);

   return (
      <div
         className={`window ${visible ? "window_visible" : ""}`}
         style={{
            left: rect.left,
            top: rect.top,
            width: rect.width,
            height: rect.height,
         }}
      >
         {/* 타이틀바 */}
         <div
            className="window_title"
            onMouseDown={onTitleMouseDown}
            onTouchStart={onTitleTouchStart}
            onTouchEnd={() => {
               dragging.current = false;
            }}
         >
            <span className="window_title_icon">📝</span>
            <span className="window_title_name">메모장</span>
            <div className="window_title_btns">
               <TitleBtn label="✕" onClick={onClose} isClose />
            </div>
         </div>

         {/* 메뉴바 */}
         <div className="note_menubar">
            <button className="note_menu_btn" onClick={save}>
               저장
            </button>
            <button className="note_menu_btn" onClick={() => setContent("")}>
               새로 만들기
            </button>
         </div>

         {/* 텍스트 영역 */}
         <textarea
            className="note_textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요..."
            spellCheck={false}
         />

         {/* 상태바 */}
         <div className="window_status">
            <span className="window_status_text">{content.length}자</span>
            <span className="window_status_sep">|</span>
            <span className="window_status_text">
               {content.split("\n").length}줄
            </span>
         </div>

         {/* 리사이즈 핸들 8방향 */}
         {["n", "s", "e", "w", "ne", "nw", "se", "sw"].map((dir) => (
            <div
               key={dir}
               className={`resize_handle resize_handle_${dir}`}
               onMouseDown={onResizeMouseDown(dir)}
               onTouchStart={onResizeTouchStart(dir)}
               onTouchEnd={() => {
                  resizing.current = false;
               }}
            />
         ))}
      </div>
   );
};

export default Memo;

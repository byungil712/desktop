import React, { useCallback, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSistrix } from "@fortawesome/free-brands-svg-icons";
import "./app.css";
import DesktopIcon from "./Component/DesktopIcon";
import TitleBtn from "./Component/TitleBtn";
import FileItem from "./Component/FileItem";
import Teskbar from "./Component/Teskbar";
import sun from "/img/sun.png"
import elysian from "/img/elysian.png"
import tvn from "/img/tvn.png"
import pinny from "/img/pinny.jpg"
import html from "/img/htmlcss.png"
import js from "/img/js.jpg"
import react from "/img/React.webp"
import figma from "/img/figma.svg"
import photoshop from "/img/photoshop.png"
import ill from "/img/illustrator.png"
import ind from "/img/indesign.png"
import phone from "/img/phone.webp"
import email from "/img/email.png"
import github from "/img/github.png"

const app = () => {
   const FS = {
      root: {
         name: "내 PC",
         icon: "🖥️",
         children: ["about", "projects", "contact"],
      },
      about: {
         name: "About Me",
         icon: "📁",
         children: ["profile", "photo", "skills"],
      },
      profile: {
         name: "프로필",
         icon: "📄",
         type: "file",
         title: "안녕하세요! 👋 ",
         desc: "웹 퍼블리셔 [박병일]입니다.\nHTML·CSS·JS·REACT를 기반으로\n다양한 화면에서도 일관된 디자인을 유지하게하고, \n 반응형이 잘 작동되는 퍼블리싱을 추구합니다.\n\n접근성과 클린코드을 중시하며\n디자이너와 개발자 사이의 가교 역할을 합니다.",
         tags: ["HTML5", "CSS3", "JavaScript", "React"],
      },
      photo: {
         name: "프로필사진.png",
         icon: "🖼️",
         type: "file",
         title: "🖼️ 프로필 사진",
         desc: "웹 퍼블리셔 [이름]\n여기에 간단한 소개 한 줄을 추가하세요.",
         tags: ["이미지"],
      },
      projects: {
         name: "Project",
         icon: "📁",
         children: ["proj1", "proj2", "proj3", "proj4"],
      },
      proj1: {
         name: "날씨 앱",
         icon: sun,
         type: "file",
         title: "날씨 앱 🌤️",
         desc: "React를 활용하여 만든 날씨 앱으로\n메인기능은 OpenWeatherMap API를 활용한 날씨 정보 제공입니다.\n현재 위치 또는 도시 선택으로 실시간 날씨, \n24시간 시간대별 예보, 5일간 주간 예보를 확인할 수 있으며 \n 간단한 미니게임들도 함께 즐길 수 있습니다.",
         tags: ["React", "Redux", "API", "반응형"],
         link: "https://byungil712.github.io/dash2/",
         git: "https://github.com/byungil712/dash2",
      },
      proj2: {
         name: "엘리시안 클론코딩",
         icon: elysian,
         type: "file",
         title: "엘리시안 클론코딩 🏢",
         desc: "계절에 맞게 즐길 수 있는 각종 스포츠를 \n 제공하는  복합 레저, 서비스 기업으로, \n React를 활용하여 클론코딩 해보았습니다",
         tags: ["React", "반응형", "클론코딩"],
         link: "#",
      },
      proj3: {
         name: "tvN 리디자인",
         icon: tvn,
         type: "file",
         title: "tvN 리디자인 🚩",
         desc: "현재 tvN 홈페이지는 다소 복잡한 \n  네비게이션과 시각적피로도, 접근성 측면에서 \n 문제가 있다고 생각하여 OTT 디자인으로 \n 재해석하여 리디자인 해보았습니다",
         tags: ["tvN", "OTT", "리디자인"],
         link: "#",
      },
      proj4: {
         name: "브랜딩",
         icon: pinny,
         type: "file",
         title: "브랜딩 & 포스터디자인",
         desc: "계절에 맞게 즐길 수 있는 각종 스포츠를 \n 제공하는  복합 레저, 서비스 기업으로, \n React를 활용하여 클론코딩 했습니다",
         tags: ["브랜딩", "포스터", "PDF"],
         link: "#",
      },
      skills: {
         name: "Skills",
         icon: "📁",
         children: [
            "htmlCss",
            "js",
            "react",
            "figma",
            "photoshop",
            "illustrator",
            "inDesign",
         ],
      },
      htmlCss: {
         name: "HTML·CSS",
         icon: html,
         type: "file",
         title: "HTML & CSS 🫧",
         tags: ["웹", "웹 표준", "Class"],
      },
      js: {
         name: "JavaScript",
         icon: js,
         type: "file",
         title: "JavaScript ⚡",
         tags: ["웹", "ES6+", "동적"],
      },
      react: {
         name: "React",
         icon: react,
         type: "file",
         title: "React ❄️",
         tags: ["웹", "API", "Component", "DOM"],
      },
      figma: {
         name: "Figma",
         icon: figma,
         type: "file",
         title: "Figma 📱",
         tags: ["웹", "UXUI", "협업"],
      },
      photoshop: {
         name: "Photoshop",
         icon: photoshop,
         type: "file",
         title: "Photoshop 📷",
         tags: ["Adobe", "편집", "보정"],
      },
      illustrator: {
         name: "Illustrator",
         icon: ill,
         type: "file",
         title: "Illustrator 🎨 ",
         tags: ["Adobe", "편집", "디자인"],
      },
      inDesign: {
         name: "inDesign",
         icon: ind,
         type: "file",
         title: "inDesign 🪷",
         tags: ["Adobe", "편집", "인쇄"],
      },
      contact: {
         name: "Contact",
         icon: "📁",
         children: ["phone", "email", "github"],
      },
      phone: {
         name: "전화번호",
         icon: phone,
         type: "file",
         title: "전화번호 📞",
         desc: "010-5214-5578\n\n 문의, 제안 등\n언제든 환영합니다!",
         tags: ["연락", "전화번호"],
      },
      email: {
         name: "이메일",
         icon: email,
         type: "file",
         title: "이메일 📧",
         desc: "bag36166@gmail.com\n\n 문의, 제안 등\n언제든 환영합니다!",
         tags: ["연락", "이메일"],
      },
      github: {
         name: "GitHub",
         icon: github,
         type: "file",
         title: "GitHub ⭐",
         tags: ["git", "배포"],
         git: "https://github.com",
      },
   };

   const desktopIcons = [
      { key: "about", label: "About Me", icon: "📁" },
      { key: "projects", label: "Project", icon: "📁" },
      { key: "contact", label: "Contact", icon: "📁" },
   ];

   // ── 유틸 ─────────────────────────────────────────────────────
   function findParent(key) {
      for (const [k, v] of Object.entries(FS)) {
         if (v.children && v.children.includes(key) && k !== key) return k;
      }
      return null;
   }

   function buildBreadcrumb(key) {
      const trail = [];
      let cur = key;
      while (cur) {
         trail.unshift(cur);
         cur = findParent(cur);
      }
      return trail;
   }

   const [windowOpen, setWindowOpen] = useState(false);
   const [visible, setVisible] = useState(false);
   const [currentKey, setCurrentKey] = useState(null);
   const [history, setHistory] = useState([]);
   const [histIdx, setHistIdx] = useState(-1);
   const [preview, setPreview] = useState(null);
   const [selectedIcons, setSelectedIcons] = useState(new Set());
   const [selectedItem, setSelectedItem] = useState(null);
   const [time, setTime] = useState(new Date());
   const [isMaximized, setIsMaximized] = useState(false);
   const [winRect, setWinRect] = useState({
      left: 180,
      top: 50,
      width: 720,
      height: 480,
   });
   const [savedRect, setSavedRect] = useState(null);

   // 바탕화면 드래그 영역
   const [dragBox, setDragBox] = useState(null); // { x, y, w, h } 렌더용
   const dragSelecting = useRef(false);
   const dragOrigin = useRef({ x: 0, y: 0 });
   const desktopRef = useRef(null);
   const iconsAreaRef = useRef(null);

   const winRef = useRef(null);
   const dragging = useRef(false);
   const dragOffset = useRef({ x: 0, y: 0 });
   const resizing = useRef(false);
   const resizeDir = useRef("");
   const resizeStart = useRef({});

   const lastTapTime = useRef({});

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

   // ── 폴더/파일 열기
   const openFolder = useCallback(
      (key, addHist = true) => {
         const node = FS[key];
         if (!node) return;
         if (node.type === "file") {
            setPreview(node);
            return;
         }

         setCurrentKey(key);
         setPreview(null);
         setSelectedItem(null);

         if (addHist) {
            setHistory((prev) => {
               const next = [...prev.slice(0, histIdx + 1), key];
               setHistIdx(next.length - 1);
               return next;
            });
         }

         if (!windowOpen) {
            setWindowOpen(true);
            requestAnimationFrame(() => setVisible(true));
         }
      },
      [windowOpen, histIdx],
   );

   const goBack = () => {
      if (histIdx > 0) {
         const newIdx = histIdx - 1;
         setHistIdx(newIdx);
         setCurrentKey(history[newIdx]);
         setPreview(null);
         setSelectedItem(null);
      }
   };

   const goForward = () => {
      if (histIdx < history.length - 1) {
         const newIdx = histIdx + 1;
         setHistIdx(newIdx);
         setCurrentKey(history[newIdx]);
         setPreview(null);
         setSelectedItem(null);
      }
   };

   const goUp = () => {
      if (!currentKey) return;
      const parent = findParent(currentKey);
      if (parent) openFolder(parent);
   };

   // ── 윈도우 컨트롤
   const closeWindow = () => {
      setVisible(false);
      setTimeout(() => {
         setWindowOpen(false);
         setCurrentKey(null);
      }, 260);
   };

   const minimizeWindow = () => setVisible(false);

   const maximizeWindow = () => {
      if (isMaximized) {
         if (savedRect) setWinRect(savedRect);
         setIsMaximized(false);
      } else {
         setSavedRect(winRect);
         setWinRect({
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight - 40,
         });
         setIsMaximized(true);
      }
   };

   // ── 드래그 (이동)
   const onTitleMouseDown = (e) => {
      if (isMaximized) return;
      dragging.current = true;
      dragOffset.current = {
         x: e.clientX - winRect.left,
         y: e.clientY - winRect.top,
      };
      e.preventDefault();
   };

   // ── 리사이즈
   const onResizeMouseDown = (dir) => (e) => {
      if (isMaximized) return;
      resizing.current = true;
      resizeDir.current = dir;
      resizeStart.current = { x: e.clientX, y: e.clientY, ...winRect };
      e.preventDefault();
      e.stopPropagation();
   };

   useEffect(() => {
      const onMove = (e) => {
         if (dragging.current) {
            const desktop = document.getElementById("desktop");
            if (!desktop) return;
            let x = e.clientX - dragOffset.current.x;
            let y = e.clientY - dragOffset.current.y;
            x = Math.max(0, Math.min(x, desktop.clientWidth - winRect.width));
            y = Math.max(0, Math.min(y, desktop.clientHeight - winRect.height));
            setWinRect((r) => ({ ...r, left: x, top: y }));
         }
         if (resizing.current) {
            const { x, y, left, top, width, height } = resizeStart.current;
            const dx = e.clientX - x;
            const dy = e.clientY - y;
            const dir = resizeDir.current;
            const minW = 360,
               minH = 240;
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
            setWinRect({ left: nl, top: nt, width: nw, height: nh });
         }
      };
      const onUp = () => {
         dragging.current = false;
         resizing.current = false;
      };
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseup", onUp);
      return () => {
         window.removeEventListener("mousemove", onMove);
         window.removeEventListener("mouseup", onUp);
      };
   }, [winRect.width, winRect.height]);

   // ── 러버밴드 드래그 선택
   const onDesktopMouseDown = (e) => {
      // 배경 클릭일때만
      if (
         e.target !== desktopRef.current &&
         e.target.className !== "desktop_bg"
      )
         return;
      dragSelecting.current = true;
      const rect = desktopRef.current.getBoundingClientRect();
      dragOrigin.current = {
         x: e.clientX - rect.left,
         y: e.clientY - rect.top,
      };
      setDragBox({
         x: dragOrigin.current.x,
         y: dragOrigin.current.y,
         w: 0,
         h: 0,
      });
      setSelectedIcons(new Set());
      e.preventDefault();
   };

   useEffect(() => {
      const onMove = (e) => {
         if (!dragSelecting.current || !desktopRef.current) return;
         const rect = desktopRef.current.getBoundingClientRect();
         const cx = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
         const cy = Math.min(Math.max(e.clientY - rect.top, 0), rect.height);
         const ox = dragOrigin.current.x;
         const oy = dragOrigin.current.y;
         const box = {
            x: Math.min(cx, ox),
            y: Math.min(cy, oy),
            w: Math.abs(cx - ox),
            h: Math.abs(cy - oy),
         };
         setDragBox(box);

         // 겹치는 아이콘 계산
         if (!iconsAreaRef.current) return;
         const icons = iconsAreaRef.current.querySelectorAll("[data-iconkey]");
         const hit = new Set();
         icons.forEach((el) => {
            const ir = el.getBoundingClientRect();
            const elX = ir.left - rect.left;
            const elY = ir.top - rect.top;
            if (
               elX < box.x + box.w &&
               elX + ir.width > box.x &&
               elY < box.y + box.h &&
               elY + ir.height > box.y
            )
               hit.add(el.dataset.iconkey);
         });
         setSelectedIcons(hit);
      };

      const onUp = () => {
         if (!dragSelecting.current) return;
         dragSelecting.current = false;
         setDragBox(null);
      };

      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseup", onUp);
      return () => {
         window.removeEventListener("mousemove", onMove);
         window.removeEventListener("mouseup", onUp);
      };
   }, []);
   const node = currentKey ? FS[currentKey] : null;
   const breadcrumb = currentKey ? buildBreadcrumb(currentKey) : [];
   const children = node?.children || [];

   const handleTouchEnd = (e, key, onSingle, onDouble) => {
      const now = Date.now();
      const last = lastTapTime.current[key] || 0;
      const diff = now - last;

      if (diff < 300 && diff > 0) {
         // 더블탭
         onDouble?.(e);
         lastTapTime.current[key] = 0;
      } else {
         // 싱글탭
         onSingle?.(e);
         lastTapTime.current[key] = now;
      }
   };

   const onTitleTouchStart = (e) => {
      if (isMaximized) return;
      const touch = e.touches[0];
      dragging.current = true;
      dragOffset.current = {
         x: touch.clientX - winRect.left,
         y: touch.clientY - winRect.top,
      };
   };

   const onTitleTouchMove = (e) => {
      if (!dragging.current) return;
      const touch = e.touches[0];
      const desktop = desktopRef.current;
      if (!desktop) return;
      let x = touch.clientX - dragOffset.current.x;
      let y = touch.clientY - dragOffset.current.y;
      x = Math.max(0, Math.min(x, desktop.clientWidth - winRect.width));
      y = Math.max(0, Math.min(y, desktop.clientHeight - winRect.height));
      setWinRect((r) => ({ ...r, left: x, top: y }));
   };

   const onTitleTouchEnd = () => {
      dragging.current = false;
   };

   const onResizeTouchStart = (dir) => (e) => {
      if (isMaximized) return;
      const touch = e.touches[0];
      resizing.current = true;
      resizeDir.current = dir;
      resizeStart.current = {
         x: touch.clientX,
         y: touch.clientY,
         ...winRect,
      };
      e.stopPropagation();
   };

   const onResizeTouchMove = (e) => {
      if (!resizing.current) return;

      const touch = e.touches[0];
      const { x, y, left, top, width, height } = resizeStart.current;
      const dx = touch.clientX - x;
      const dy = touch.clientY - y;
      const dir = resizeDir.current;
      const minW = 360,
         minH = 240;
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
      setWinRect({ left: nl, top: nt, width: nw, height: nh });
   };

   const onResizeTouchEnd = () => {
      resizing.current = false;
   };

   return (
      <div>
         {/* ── 데스크탑 ── */}
         <div
            id="desktop"
            ref={desktopRef}
            className="desktop"
            onMouseDown={onDesktopMouseDown}
            onClick={() => {
               if (!dragSelecting.current) setSelectedIcons(new Set());
            }}
         >
            <div className="desktop_bg"></div>

            {/* 러버밴드 선택 박스 */}
            {dragBox && dragBox.w > 2 && dragBox.h > 2 && (
               <div
                  className="bg_drag"
                  style={{
                     left: dragBox.x,
                     top: dragBox.y,
                     width: dragBox.w,
                     height: dragBox.h,
                  }}
               />
            )}

            {/* 데스크탑 아이콘 */}
            <div className="desktop_icons" ref={iconsAreaRef}>
               {[
                  { key: "root", label: "내 PC", icon: "🖥️" },
                  ...desktopIcons,
               ].map(({ key, label, icon }) => (
                  <DesktopIcon
                     key={key}
                     iconKey={key}
                     icon={icon}
                     label={label}
                     selected={selectedIcons.has(key)}
                     onClick={(e) => {
                        e.stopPropagation();
                        setSelectedIcons(new Set([key]));
                     }}
                     onDoubleClick={() => openFolder(key)}
                     onTouchEnd={(
                        e, // ← 추가
                     ) =>
                        handleTouchEnd(
                           e,
                           key,
                           () => setSelectedIcons(new Set([key])), // 싱글탭 → 선택
                           () => openFolder(key), // 더블탭 → 열기
                        )
                     }
                  />
               ))}
            </div>

            {/* ── 탐색기 창 ── */}
            {windowOpen && (
               <div
                  ref={winRef}
                  className={`window ${visible ? "window_visible" : ""}`}
                  style={{
                     left: winRect.left,
                     top: winRect.top,
                     width: winRect.width,
                     height: winRect.height,
                  }}
               >
                  <div className="window_top">
                     {/* 타이틀바 */}
                     <div
                        className="window_title"
                        onMouseDown={onTitleMouseDown}
                        onTouchStart={onTitleTouchStart}
                        onTouchMove={onTitleTouchMove}
                        onTouchEnd={onTitleTouchEnd}
                     >
                        <span className="window_title_icon">
                           {node?.icon || "📁"}
                        </span>
                        <span className="window_title_name">
                           {node?.name || "폴더"}
                        </span>
                        <div className="window_title_btns">
                           <TitleBtn label="─" onClick={minimizeWindow} />
                           <TitleBtn label="□" onClick={maximizeWindow} />
                           <TitleBtn label="✕" onClick={closeWindow} isClose />
                        </div>
                     </div>

                     <div className="window_address">
                        <button
                           className="menu_btn"
                           onClick={goBack}
                           disabled={histIdx <= 0}
                        >
                           ←
                        </button>
                        <button
                           className="menu_btn"
                           onClick={goForward}
                           disabled={histIdx >= history.length - 1}
                        >
                           →
                        </button>
                        <button className="menu_btn" onClick={goUp}>
                           ↑
                        </button>
                        <button
                           className="menu_btn"
                           onClick={() => setPreview(null)}
                        >
                           ↻
                        </button>

                        <div className="breadcrumb">
                           {breadcrumb.map((k, i) => (
                              <span
                                 key={k}
                                 style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                 }}
                              >
                                 {i > 0 && (
                                    <span className="breadcrumb_direction">
                                       {" "}
                                       ›
                                    </span>
                                 )}
                                 <span
                                    className="breadcrumb_text"
                                    onClick={() => openFolder(k)}
                                 >
                                    {FS[k]?.name || k}
                                 </span>
                              </span>
                           ))}
                        </div>

                        <form className="search_box">
                           <input
                              type="text"
                              className="search_input"
                              placeholder="검색"
                           />
                           <span className="search_input_icon">
                              <FontAwesomeIcon icon={faSistrix} />
                           </span>
                        </form>
                     </div>

                     {/* 콘텐츠 */}
                     <div className="file_content">
                        {children.length === 0 ? (
                           <div className="file_empty">
                              이 폴더는 비어 있습니다.
                           </div>
                        ) : (
                           children.map((childKey) => {
                              const child = FS[childKey];
                              if (!child) return null;
                              return (
                                 <div className="file_items" key={childKey}>
                                    <FileItem
                                       key={childKey}
                                       icon={child.icon}
                                       name={child.name}
                                       selected={selectedItem === childKey}
                                       onClick={(e) => {
                                          e.stopPropagation();
                                          setSelectedItem(childKey);
                                       }}
                                       onDoubleClick={() => {
                                          if (child.type === "file")
                                             setPreview(child);
                                          else openFolder(childKey);
                                       }}
                                       onTouchEnd={(
                                          e, // ← 추가
                                       ) =>
                                          handleTouchEnd(
                                             e,
                                             childKey,
                                             () => setSelectedItem(childKey), // 싱글탭 → 선택
                                             () => {
                                                // 더블탭 → 열기
                                                if (child.type === "file")
                                                   setPreview(child);
                                                else openFolder(childKey);
                                             },
                                          )
                                       }
                                    />
                                 </div>
                              );
                           })
                        )}

                        {/* 미리보기 패널 */}
                        {preview && (
                           <div className="preview">
                              <button
                                 className="preview_close"
                                 onClick={() => setPreview(null)}
                              >
                                 ✕
                              </button>
                              <div className="preview_title">
                                 {preview.title}
                              </div>
                              <div className="preview_text">
                                 {preview?.desc}
                              </div>
                              <div className="preview_tags">
                                 {(preview.tags || []).map((t) => (
                                    <span key={t} className="preview_tag">
                                       {t}
                                    </span>
                                 ))}
                              </div>
                              <div className="preview_link_box">
                                 {preview.link && (
                                    <a
                                       href={preview?.link}
                                       className="preview_link"
                                    >
                                       사이트 →
                                    </a>
                                 )}
                                 {preview.git && (
                                    <a
                                       href={preview.git}
                                       className="preview_link"
                                    >
                                       GitHub →
                                    </a>
                                 )}
                              </div>
                           </div>
                        )}
                     </div>
                  </div>

                  {/* 상태바 */}
                  <div className="window_status">
                     <span className="window_status_text">
                        {children.length}개 항목
                     </span>
                     {selectedItem && FS[selectedItem] && (
                        <>
                           <span className="window_status_sep">|</span>
                           <span className="window_status_text">
                              {FS[selectedItem].name}
                           </span>
                        </>
                     )}
                  </div>

                  {/* 리사이즈 핸들 */}
                  {!isMaximized &&
                     ["n", "s", "e", "w", "ne", "nw", "se", "sw"].map((dir) => (
                        <div
                           key={dir}
                           className={`resize_handle resize_handle_${dir}`}
                           onMouseDown={onResizeMouseDown(dir)}
                           onTouchStart={onResizeTouchStart(dir)}
                           onTouchMove={onResizeTouchMove}
                           onTouchEnd={onResizeTouchEnd}
                        />
                     ))}
               </div>
            )}
         </div>

         <Teskbar
            node={node}
            windowOpen={windowOpen}
            visible={visible}
            setVisible={setVisible}
         />
      </div>
   );
};

export default app;

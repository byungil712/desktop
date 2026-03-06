import React from "react";

const DesktopIcon = ({
   iconKey,
   icon,
   label,
   selected,
   onClick,
   onDoubleClick,
   onTouchEnd
}) => {
   const isImage = icon?.startsWith("/") || icon?.startsWith("http");

   return (
      <div
         data-iconkey={iconKey}
         className={`desktop_icon ${selected ? "desktop_icon_active" : ""}`}
         onClick={onClick}
         onDoubleClick={onDoubleClick}
         onTouchEnd={onTouchEnd}
      >
         {isImage ? (
            <img src={icon} alt={label} className="desktop_icon_img" />
         ) : (
            <span className="desktop_icon_emoji">{icon}</span>
         )}
         <span className="desktop_icon_label">{label}</span>
      </div>
   );
};

export default DesktopIcon;

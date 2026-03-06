import React from "react";

const FileItem = ({ icon, name, selected, onClick, onDoubleClick, onTouchEnd }) => {
   const isImage = icon?.startsWith("/") || icon?.startsWith("http");

   return (
      <div
         className={`file_item${selected ? " file_item_selected" : ""}`}
         onClick={onClick}
         onDoubleClick={onDoubleClick}
         onTouchEnd={onTouchEnd}
      >
         {isImage ? (
            <img src={icon} alt={name} className="file_item_img" />
         ) : (
            <span className="file_item_emoji">{icon}</span>
         )}
         <span className="file_item_name">{name}</span>
      </div>
   );
};

export default FileItem;

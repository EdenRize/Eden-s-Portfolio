import { useState } from "react";
import { Carousel } from "./Carousel";
import { ToolsListPopup } from "./ToolsListPopup";
import { toolsData } from "../data/toolsData";

export function Tools() {
  const [showAllTools, setShowAllTools] = useState(false);
  const toolsImgs = toolsData.map(tool => tool.img);

  return (
    <div className="tools full-section">
      <h1 className="font-Gilmer-Outline">Tech Stack</h1>
      <button 
        className="all-tools-btn" 
        onClick={() => setShowAllTools(true)}
      >
        All Tools
      </button>
      <div className="carousel-container">
        <Carousel imgs={toolsImgs} />
      </div>
      {showAllTools && (
        <ToolsListPopup 
          tools={toolsData} 
          onClose={() => setShowAllTools(false)} 
        />
      )}
    </div>
  );
}

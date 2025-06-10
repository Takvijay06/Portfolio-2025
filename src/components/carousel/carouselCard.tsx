import { useState } from "react";
import { FrontCard } from "./FrontCard";
import { BackCard } from "./BackCard";

interface IProject {
  title: string;
  description: string;
  image: string;
}

interface IProps {
  project: IProject;
}

export const CarouselCard = ({ project }: IProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const toggleFlip = () => setIsFlipped((prev) => !prev);
  return (
    <div
      onClick={toggleFlip}
      style={{
        perspective: "1000px",
        width: "100%",
        height: "100%",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transition: "transform 0.7s",
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          borderRadius: "1rem",
          boxShadow: "0 4px 8px rgba(0,0,0,0.15), 0 6px 20px rgba(0,0,0,0.19)",
        }}
      >
        {/* Front */}
       <FrontCard project={project}/>

        {/* Back */}
        <BackCard project={project}/>
      </div>
    </div>
  );
};

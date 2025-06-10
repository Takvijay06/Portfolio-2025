import { useEffect, useState, useCallback } from "react";
import { useSwipeable } from "react-swipeable";
import { projects } from "../../assets/dummyData/data";
import { CarouselCard } from "./carouselCard";

const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () =>
      setIsMobile(
        window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent)
      );
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

const PortfolioCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const isMobile = useDeviceType();

  const prevProject = useCallback(() => {
    setIsFlipped(false);
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  }, []);

  const nextProject = useCallback(() => {
    setIsFlipped(false);
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  }, []);

  const project = projects[current];

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextProject,
    onSwipedRight: prevProject,
    trackMouse: true,
  });

  useEffect(() => {
    const handleKey = (e: { key: string }) => {
      if (e.key === "ArrowLeft") prevProject();
      if (e.key === "ArrowRight") nextProject();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [nextProject, prevProject]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 p-6">
      {isMobile ? (
        // 📱 Mobile Frame with Arrows
        <div className="w-80 h-[580px] bg-white rounded-[2rem] border-8 border-gray-300 relative overflow-hidden shadow-xl flex flex-col">
          <div
            {...swipeHandlers}
            className="flex-1 p-4 flex flex-col items-center"
          >
            <h2 className="text-lg font-bold text-center mb-4">My Projects</h2>
            <div className="relative w-full h-64">
              <CarouselCard project={project} />
            </div>

            {/* Tech Stack Info */}
            <div className="mt-4 text-center text-gray-600 text-lg flex-col">
              <div>
                <b>Tech stack</b>
              </div>
              <div>React, Node, Tailwind</div>
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="bg-gray-100 py-3 px-6 flex justify-between items-center border-t">
            <button
              onClick={prevProject}
              className="bg-gray-300 hover:bg-gray-400 text-xl px-4 py-2 rounded-full shadow"
            >
              ‹
            </button>
            <button
              onClick={nextProject}
              className="bg-gray-300 hover:bg-gray-400 text-xl px-4 py-2 rounded-full shadow"
            >
              ›
            </button>
          </div>
        </div>
      ) : (
        // 💻 Desktop Frame
        <div className="w-full max-w-6xl h-[600px] bg-gray-900 rounded-3xl shadow-2xl border-4 border-gray-800 relative overflow-hidden flex flex-col">
          <div className="bg-gray-800 py-4 text-white text-center font-semibold text-xl">
            My Projects
          </div>
          <div className="flex-1 flex items-center justify-center px-8">
            <div className="relative w-full max-w-md h-96"><CarouselCard project={project} /></div>
          </div>

          {/* Desktop Navigation Buttons */}
          <div className="bg-gray-800 py-4 flex justify-center gap-6">
            <button
              onClick={prevProject}
              className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded-xl shadow-inner"
            >
              ⬅️ Left
            </button>
            <button
              onClick={nextProject}
              className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded-xl shadow-inner"
            >
              Right ➡️
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioCarousel;

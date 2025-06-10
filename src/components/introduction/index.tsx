import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import ButtonLink from "../../common/button";
import VjProfile from "../../assets/images/profilePictures/VjProfile1.jpg";

export const Introduction = () => {
  const line = "I'm ";
  const tags = useMemo(
    () => [
      "Vijay Tak",
      "Fullstack Engineer",
      "a Frontend Engineer",
      "a Backend Engineer",
    ],
    []
  );

  const [displayText, setDisplayText] = useState("");
  const [tagIndex, setTagIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentTag = tags[tagIndex];

    const timeout = setTimeout(
      () => {
        if (isTyping) {
          if (charIndex < currentTag.length) {
            setCharIndex((prev) => prev + 1);
            setDisplayText(line + currentTag.slice(0, charIndex + 1));
          } else {
            setIsTyping(false);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((prev) => prev - 1);
            setDisplayText(line + currentTag.slice(0, charIndex - 1));
          } else {
            setIsTyping(true);
            setTagIndex((prev) => (prev + 1) % tags.length);
          }
        }
      },
      isTyping && charIndex === currentTag.length ? 1500 : 70
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, tagIndex, tags]);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-4 sm:px-10 py-16 bg-gray-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-[150%] h-[150%] absolute top-[-25%] left-[-25%] bg-[conic-gradient(at_top_left,_#4f46e5,_#9333ea,_#ec4899,_#4f46e5)] opacity-20 animate-spin-slower" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20 max-w-7xl w-full">
        {/* Text Content */}
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {displayText}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6">
            I craft clean, scalable code & beautiful UIs. Passionate about
            performance and UX.
          </p>
          <ButtonLink label="Contact Me" redirectLink="/about" />
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-1 shadow-xl">
            <img
              src={VjProfile}
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-white"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

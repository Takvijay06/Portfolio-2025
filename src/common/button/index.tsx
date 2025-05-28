import { useState } from "react";
import { Link } from "react-router";

interface IButton {
  label: string;
  redirectLink?: string;
}

const ButtonLink = ({ label, redirectLink }: IButton) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={redirectLink ? redirectLink : "#"}
        className="flex items-center gap-1"
      >
        {label}
        <span className="text-[15px] text-white">
          {isHovered ? "🢂" : "🢅"}
        </span>
      </Link>
    </button>
  );
};

export default ButtonLink;

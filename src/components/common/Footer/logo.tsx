import { Link } from "react-router";
import vjLogo from "./../../../assets/images/po.png";

const Logo = () => {
  return (
    <div className="mb-6 md:mb-0 flex justify-center md:justify-start">
      <Link to="/" className="flex items-center">
        <img
          src={vjLogo}
          className="h-12 md:h-16"
          alt="Logo"
        />
      </Link>
    </div>
  );
};

export default Logo;

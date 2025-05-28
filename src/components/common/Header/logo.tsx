import { Link } from "react-router";
import vjLogo from "../../../assets/images/po.png"

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img
        src={vjLogo}
        className="mr-3 h-12"
        alt="Logo"
      />
    </Link>
  );
};

export default Logo;

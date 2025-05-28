import { Link } from "react-router";
import { links } from "../../../../common/constants";

const Resources = () => {
  return (
    <div>
      <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
        Resources
      </h2>
      <ul className="text-gray-500 font-medium space-y-2">
        {links.map(({ label, link }) => {
          return (
            <li>
              <Link to={link} className="hover:underline">
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Resources;

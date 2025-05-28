import { Link } from "react-router";

const PolicyLinks = () => {
  return (
    <div>
      <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
        Legal
      </h2>
      <ul className="text-gray-500 font-medium space-y-2">
        <li>
          <Link to="#" className="hover:underline">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link to="#" className="hover:underline">
            Terms &amp; Conditions
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PolicyLinks;

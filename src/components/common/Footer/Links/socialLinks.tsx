import { socialMediaLinks } from "../../../../common/constants";

const SocialLinks = () => {
  return (
    <div>
      <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
        Follow us
      </h2>
      <ul className="text-gray-500 font-medium space-y-2">
        {socialMediaLinks.map(({ label, link }) => {
          return (
            <li>
              <a
                href={link}
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;

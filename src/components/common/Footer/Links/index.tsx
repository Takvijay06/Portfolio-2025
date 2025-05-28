import Resources from "./resources";
import SocialLinks from "./socialLinks";
import PolicyLinks from "./policyLinks";

const Links = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left">
        <Resources />
        <SocialLinks />
        <PolicyLinks />
      </div>
    </>
  );
};

export default Links;

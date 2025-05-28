import Logo from "./logo";
import Links from "./Links";
import CopyRights from "./copyRights";
import SocialLinksWithIcon from "./socialLinksWithIcon";
import Wrapper from "./wrapper";

const Footer = () => {
  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <Logo />
        <Links />
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center text-center">
        <CopyRights />
        <SocialLinksWithIcon />
      </div>
    </Wrapper>
  );
};

export default Footer;

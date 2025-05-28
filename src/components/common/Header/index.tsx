import { NavigationLinks } from "./navigationLinks";
import Logo from "./logo";
import PublicLinks from "./publicLinks";
import Wrapper from "./wrapper";

const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <NavigationLinks />
      <PublicLinks />
    </Wrapper>
  );
};

export default Header;

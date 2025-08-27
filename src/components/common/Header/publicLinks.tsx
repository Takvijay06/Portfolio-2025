import ButtonLink from "../../../common/button";
import { routes } from "../../../routes/routes";

const PublicLinks = () => {
  return (
    <div className="hidden lg:flex items-center">
      <ButtonLink label="My Work" redirectLink={`/${routes.myWork}`} />
    </div>
  );
};

export default PublicLinks;

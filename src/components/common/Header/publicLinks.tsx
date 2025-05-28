import ButtonLink from "../../../common/button";

const PublicLinks = () => {
  return (
    <div className="hidden lg:flex items-center">
      <ButtonLink label="My Work" redirectLink="/about" />
    </div>
  );
};

export default PublicLinks;

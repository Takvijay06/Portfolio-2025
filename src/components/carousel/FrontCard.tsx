interface IProject {
  title: string;
  description: string;
  image: string;
}

interface IProps {
  project: IProject;
}

export const FrontCard = ({ project }: IProps) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backfaceVisibility: "hidden",
        borderRadius: "1rem",
        overflow: "hidden",
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

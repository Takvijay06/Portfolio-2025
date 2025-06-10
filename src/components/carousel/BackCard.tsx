interface IProject {
  title: string;
  description: string;
  image: string;
}

interface IProps {
  project: IProject;
}

export const BackCard = ({ project }: IProps) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backfaceVisibility: "hidden",
        backgroundColor: "#1f2937",
        color: "white",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        borderRadius: "1rem",
        transform: "rotateY(180deg)",
      }}
    >
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-sm">{project.description}</p>
      <p className="text-xs italic mt-4">(Click card to flip)</p>
    </div>
  );
};

import { useState } from "react";
import { IAccordion } from "../../common/interfaces/accordion";

const Accordian = ({ title, content }: IAccordion) => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" overflow-hidden shadow-sm">
      <div
        className="flex justify-between items-center cursor-pointer p-4 hover:bg-gray-200 transition"
        onClick={() => setOpen(!open)}
      >
        <h3 className="font-medium text-gray-800 text-lg">{title}</h3>
        <span className="text-2xl text-gray-500">{open ? "−" : "+"}</span>
      </div>
      {open && (
        <div className="p-2 bg-white text-gray-700">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordian;

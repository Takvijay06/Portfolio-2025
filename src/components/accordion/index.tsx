import { AccordianMain } from "../../common/interfaces/accordion";
import Accordian from "./accordion";

const AccordionMain = (props: AccordianMain) => {
  const { data } = props;
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">FAQ</h2>
        <p className="text-base sm:text-lg text-gray-600">Everything you need to know</p>
      </div>
      <div className="space-y-4">
        {data.map(({ title, content }, idx) => (
          <Accordian key={idx} title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default AccordionMain;

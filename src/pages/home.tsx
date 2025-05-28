import AccordionMain from "../components/accordion";
import { accordionData } from "../assets/dummyData/data";

export default function Home() {
  return (
    <>
    <AccordionMain data={accordionData}/>
    </>
  );
}

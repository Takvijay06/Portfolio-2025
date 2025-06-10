import AccordionMain from "../components/accordion";
import { accordionData } from "../assets/dummyData/data";
import Carousel from "../components/carousel";
import { Introduction } from "../components/introduction";

export default function Home() {
  return (
    <>
      <Introduction />
      <Carousel />
      <AccordionMain data={accordionData} />
    </>
  );
}

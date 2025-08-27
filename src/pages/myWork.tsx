import { useState } from "react";
import OTP from "../components/OTP";

export const MyWork = () => {
  return (
    <Tabs data={data} />
  )
};


const data = [
  { label: "OTP", content: <OTP /> },
  { label: "Modal", content: <div>Modal</div> }
]


type Tab = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  data: Tab[];
};

const Tabs: React.FC<TabsProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Tab Header */}
      <div className="flex flex-wrap justify-center gap-3 p-2 dark:bg-gray-900/70 rounded-2xl shadow-lg backdrop-blur-md">
        {data.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`relative px-5 py-2.5 rounded-xl font-medium text-sm md:text-base transition-all duration-300
              ${
                activeTab === index
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className=" p-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:to-gray-900 shadow-xl transition-all duration-500">
        <div
          key={activeTab}
          className="animate-fadeSlide text-gray-800 dark:text-gray-100"
        >
          {data[activeTab]?.content}
        </div>
      </div>
    </div>
  );
};

export default Tabs;

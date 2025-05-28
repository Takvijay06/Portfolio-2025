import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto w-full max-w-screen-xl p-4 sm:p-6 lg:p-8">
        {children}
      </div>
    </footer>
  );
};

export default Wrapper;

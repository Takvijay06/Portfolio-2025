import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/slice/demoSlice";

export const Contact = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value = useSelector((state: any) => state.demo.value);
  return <div className="mx-auto w-full max-w-7xl" onClick={() => dispatch(increment())}>Contact {value}</div>;
};

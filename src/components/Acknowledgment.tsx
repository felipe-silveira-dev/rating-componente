import { FC } from "react";
import ThankYou from "./icons/ThankYou";

type Acknowledgment = {
    className?: string
    rate?: number
    edit: CallableFunction
}

const Acknowledgment: FC<Acknowledgment> = ({className, rate, edit}) => {
  return (
    <div className={`flex flex-col justify-center items-center space-y-6 bg-[#252D37] rounded-2xl px-6 py-10 max-w-xs md:max-w-sm ${className}`}>
      <div>
        <ThankYou />
      </div>
      <div className="flex text-sm text-[#f3893d] bg-[#191f2b] py-1.5 px-6 rounded-full">
        You selected {rate} out of 5
      </div>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="mt-2 text-2xl font-extrabold">Thank you!</h1>
        <p className="text-[#7C8798] text-sm px-2">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
      <button className="w-full btn-primary" onClick={() => edit()}>
        Edit
      </button>
    </div>
  );
};

export default Acknowledgment;

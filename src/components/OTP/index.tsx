import { useRef, useState } from "react";
import Timer from "../Timer";

interface OTPProps {
  length?: number;
}

const OTP = ({ length = 4 }: OTPProps) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [otpFields, setOtpFields] = useState(Array(length).fill(""));
  const [canResend, setCanResend] = useState(false);
  const [resetKey, setResetKey] = useState(0); // used to reset timer

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const { key } = e;

    if (!isNaN(Number(key)) && key !== " ") {
      const updated = [...otpFields];
      updated[index] = key;
      setOtpFields(updated);
      if (index < otpFields.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }

    if (key === "ArrowRight" && index < otpFields.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
    if (key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (key === "Backspace") {
      const updated = [...otpFields];
      updated[index] = "";
      setOtpFields(updated);
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleVerify = () => {
    alert(`Verifying OTP: ${otpFields.join("")}`);
  };

  const handleResend = () => {
    alert("OTP Resent!");
    setOtpFields(Array(length).fill(""));
    inputRefs.current[0]?.focus();
    setCanResend(false);
    setResetKey((prev) => prev + 1); // restart timer
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-800">Verify OTP</h1>
        <p className="mt-2 text-center text-gray-600">
          Please check your inbox to verify your account
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-3 sm:gap-4 mt-6">
          {otpFields.map((otp, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              inputMode="numeric"
              maxLength={1}
              value={otp}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 sm:w-14 sm:h-14 text-center text-xl font-semibold text-black 
                         rounded-xl border border-gray-300 bg-white shadow-md 
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-400 
                         outline-none transition-all duration-200"
            />
          ))}
        </div>

        {/* Timer */}
        <Timer
          key={resetKey} // resets timer when resend
          onComplete={() => setCanResend(true)}
        />

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleVerify}
            className="flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-md
                       hover:bg-blue-700 active:scale-95 transition-transform"
          >
            Verify
          </button>
          <button
            onClick={handleResend}
            disabled={!canResend}
            className={`flex-1 py-3 rounded-xl border font-semibold transition-transform
              ${canResend
                ? "border-gray-300 text-gray-700 hover:bg-gray-100 active:scale-95"
                : "border-gray-200 text-gray-400 cursor-not-allowed bg-gray-100"}`}
          >
            Resend
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTP;

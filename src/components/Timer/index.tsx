import { useEffect, useState } from "react";

interface TimerProps {
    minute?: number;
    second?: number;
    onComplete?: () => void;
}

const Timer = ({ minute = 0, second = 30, onComplete }: TimerProps) => {
    const [minutes, setMinutes] = useState(minute);
    const [seconds, setSeconds] = useState(second);
    const [showTimer, setShowTimer] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds((sec) => sec - 1);
            } else if (minutes > 0) {
                setMinutes((min) => min - 1);
                setSeconds(59);
            } else {
                clearInterval(interval);
                setShowTimer(false);
                onComplete?.(); // notify parent when timer completes
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [minutes, seconds, onComplete]);

    if(!showTimer){
        return <></>
    }

    return (
        <div className="text-center mt-4 text-gray-600 font-medium">
            Resend in {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
        </div>
    );
};

export default Timer;

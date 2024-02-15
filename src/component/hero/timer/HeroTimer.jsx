import "./HeroTimer.css"
import React, {useEffect, useState} from "react";

function addTrailingZero(number) {
    return (number < 10) ? `0${number}` : `${number}`;
}

export default function HeroTimer() {
    const targetDate = "2024-03-30T00:00:00";

    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const {days, hours, minutes, seconds} = timeLeft;

    return (
        Object.entries(timeLeft).length === 0 ?
            <span className="text-4xl text-white">Countdown expired!</span>
            :
            <div className={"heroTimer text-white"}>
                <div>
                    <span className={"timeCount"}>{addTrailingZero(days)}</span>
                    <span className={"timeCaptions"}>DAY</span>
                </div>
                <div>
                    <span className={"timeCount"}>{addTrailingZero(hours)}</span>
                    <span className={"timeCaptions"}>HRS</span>
                </div>
                <div>
                    <span className={"timeCount"}>{addTrailingZero(minutes)}</span>
                    <span className={"timeCaptions"}>MIN</span>
                </div>
                <div>
                    <span className={"timeCount"}>{addTrailingZero(seconds)}</span>
                    <span className={"timeCaptions"}>SEC</span>
                </div>
            </div>
    );
}
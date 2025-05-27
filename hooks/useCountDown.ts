"use client";
import { useState, useEffect, useRef } from "react";

const useCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 12,
    minutes: 30,
    seconds: 45,
  });
  const endTime = useRef(
    Date.now() +
      timeLeft.days * 86400000 +
      timeLeft.hours * 3600000 +
      timeLeft.minutes * 60000 +
      timeLeft.seconds * 1000
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = endTime.current - Date.now();

      if (remaining <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        return;
      }

      const seconds = Math.floor((remaining / 1000) % 60);
      const minutes = Math.floor((remaining / 1000 / 60) % 60);
      const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
      const days = Math.floor(remaining / (1000 * 60 * 60 * 24));

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
};

export default useCountdown;

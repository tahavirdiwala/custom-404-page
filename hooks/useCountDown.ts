"use client";
import { useState, useEffect, useRef } from "react";

/**
 * A custom React hook that provides a countdown timer functionality.
 *
 * The hook initializes with a default countdown time of 12 hours, 30 minutes, and 45 seconds,
 * and automatically decrements every second until it reaches zero. The countdown calculates
 * an end time when the component first mounts and counts down to that specific moment.
 *
 * @returns {Object} An object containing the current countdown state
 * @returns {number} returns.days - Number of days remaining (0 or more)
 * @returns {number} returns.hours - Number of hours remaining (0-23)
 * @returns {number} returns.minutes - Number of minutes remaining (0-59)
 * @returns {number} returns.seconds - Number of seconds remaining (0-59)
 *
 * @example
 * ```tsx
 * function CountdownTimer() {
 *   const { days, hours, minutes, seconds } = useCountdown();
 *
 *   return (
 *     <div>
 *       {days}d {hours}h {minutes}m {seconds}s
 *     </div>
 *   );
 * }
 * ```
 *
 * @note The countdown automatically stops and clears its interval when it reaches zero.
 * @note The end time is calculated once when the hook is first initialized and remains fixed.
 */
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

      const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
      const seconds = Math.floor((remaining / 1000) % 60);
      const minutes = Math.floor((remaining / 1000 / 60) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
};

export { useCountdown };

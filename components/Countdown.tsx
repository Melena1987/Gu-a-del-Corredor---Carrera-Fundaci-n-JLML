import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  const TimeValue: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <span className="text-4xl sm:text-5xl font-bold text-gray-800 tabular-nums">{formatNumber(value)}</span>
      <span className="block text-xs sm:text-sm uppercase tracking-wider text-gray-500 mt-1">{label}</span>
    </div>
  );

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
      <TimeValue value={timeLeft.days} label="Días" />
      <TimeValue value={timeLeft.hours} label="Horas" />
      <TimeValue value={timeLeft.minutes} label="Minutos" />
      <TimeValue value={timeLeft.seconds} label="Segundos" />
    </div>
  );
};

export default Countdown;
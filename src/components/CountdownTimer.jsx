import { useState, useEffect, useMemo } from "react";

// FlipCard: single digit flip
function FlipCard({ digit }) {
  const [previous, setPrevious] = useState(digit);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (digit === previous) return;

    setFlipping(true);
    const timeout = setTimeout(() => {
      setPrevious(digit);
      setFlipping(false);
    }, 600); // match your CSS animation duration
    return () => clearTimeout(timeout);
  }, [digit, previous]);

  return (
    <div className="cards">
      <div className="card-element">
        <div className="card-element__top">{digit}</div>
        <div className="card-element__bottom">{previous}</div>
        <div className={`card-element-flip ${flipping ? "anim" : ""}`}>
          <div className="card-element-flip__top">{previous}</div>
          <div className="card-element-flip__bottom">{digit}</div>
        </div>
      </div>
    </div>
  );
}

// Split number into two digits
function splitDigits(num) {
  return [Math.floor(num / 10), num % 10];
}

// Countdown Timer
function CountdownTimer() {
  const launchDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 14);
    return date;
  }, []);

  const [daysDigits, setDaysDigits] = useState([0, 0]);
  const [hoursDigits, setHoursDigits] = useState([0, 0]);
  const [minutesDigits, setMinutesDigits] = useState([0, 0]);
  const [secondsDigits, setSecondsDigits] = useState([0, 0]);

  useEffect(() => {
    const updateTimer = () => {
      const now = Date.now();
      const diff = launchDate.getTime() - now;
      const totalSeconds = diff > 0 ? Math.floor(diff / 1000) : 0;

      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const seconds = totalSeconds % 60;

      setDaysDigits(splitDigits(days));
      setHoursDigits(splitDigits(hours));
      setMinutesDigits(splitDigits(minutes));
      setSecondsDigits(splitDigits(seconds));
    };

    updateTimer(); // initialize immediately
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [launchDate]);

  const renderUnit = (digits, unitName) => (
    <div className="cards-wrapper" id={unitName} key={unitName}>
      <div className="cards-container">
        {digits.map((digit, idx) => (
          <FlipCard key={idx} digit={digit} />
        ))}
      </div>
      <p className="text">
        {unitName.charAt(0).toUpperCase() + unitName.slice(1)}
      </p>
    </div>
  );

  return (
    <section className="countdown-container">
      {renderUnit(daysDigits, "days")}
      {renderUnit(hoursDigits, "hours")}
      {renderUnit(minutesDigits, "minutes")}
      {renderUnit(secondsDigits, "seconds")}
    </section>
  );
}

export default CountdownTimer;

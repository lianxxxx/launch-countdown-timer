import { useEffect, useState, useRef } from "react";

const FlipCard = ({ value, label }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [previousValue, setPreviousValue] = useState(value);
  const [isFlipping, setIsFlipping] = useState(false);
  const flipKeyRef = useRef(0);

  useEffect(() => {
    if (value !== displayValue) {
      setPreviousValue(displayValue);
      setIsFlipping(true);
      flipKeyRef.current += 1;

      const timer = setTimeout(() => {
        setDisplayValue(value);
        setIsFlipping(false);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [value, displayValue]);

  const formatValue = (val) => val.toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center sm:gap-4 ">
      <div className="flip-card relative w-16 h-16 md:w-32 md:h-32">
        <div className="flip-card-inner">
          {/* Top half - static */}
          <div className="card-face card-face-top">
            <span className="card-number  text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider">
              {formatValue(displayValue)}
            </span>
          </div>

          {/* Bottom half - static */}
          <div className="card-face card-face-bottom">
            <span className="card-number  text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider">
              {formatValue(displayValue)}
            </span>
          </div>

          {isFlipping && (
            <>
              {/* Top flipping down - OLD value */}
              <div
                key={`top-${flipKeyRef.current}`}
                className="flip-card-top flip-card-top-flip flex items-end justify-center"
              >
                <span className="card-number  text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider">
                  {formatValue(previousValue)}
                </span>
              </div>

              {/* Bottom flipping up - NEW value */}
              <div
                key={`bottom-${flipKeyRef.current}`}
                className="flip-card-bottom flip-card-bottom-flip flex items-start justify-center"
              >
                <span className="card-number  text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider">
                  {formatValue(value)}
                </span>
              </div>
            </>
          )}

          {/* Notches */}
          <div className="card-notch card-notch-left" />
          <div className="card-notch card-notch-right" />
        </div>
      </div>

      {/* Label */}
      <span className=" uppercase text-[7px] label-text sm:text-xs md:text-sm tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em]">
        {label}
      </span>
    </div>
  );
};

export default FlipCard;

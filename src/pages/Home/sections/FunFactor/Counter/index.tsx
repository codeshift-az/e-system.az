import { useEffect, useState } from "react";

interface CounterProps {
  from?: number;
  to: number;
  speed?: number;
  refreshInterval?: number;
  decimals?: number;
  onComplete?: (value: number) => void;
  className?: string;
}
const Counter = ({
  from = 0,
  to,
  speed = 1000,
  refreshInterval = 100,
  decimals = 0,
  onComplete,
  className,
}: CounterProps) => {
  const [value, setValue] = useState(from);

  useEffect(() => {
    let loopCount = 0;
    const loops = Math.ceil(speed / refreshInterval);
    const increment = (to - from) / loops;

    const interval = setInterval(() => {
      setValue((prevValue) => {
        const nextValue = prevValue + increment;
        loopCount++;

        if (loopCount >= loops) {
          clearInterval(interval);
          if (onComplete) onComplete(to);
          return to;
        }

        return nextValue;
      });
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [from, to, speed, refreshInterval, onComplete]);

  return <span className={className}>{value.toFixed(decimals)}</span>;
};

export default Counter;

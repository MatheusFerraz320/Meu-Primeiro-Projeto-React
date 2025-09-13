import { useEffect, useState } from "react";
export default function SlideIn({ children, delay = 100, className = "" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transform transition-all duration-1000 ease-out ${
        visible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

import {useEffect, useRef, useState} from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return [isDarkMode, setIsDarkMode] as const;
};

export const TypingReactAPI = () => {
  const [user, setUser] = useState<{name: string; membershipStatus: string}>();

  useEffect(() => {
    setUser({
      name: "Bob",
      membershipStatus: "premium",
    });
  }, []);

  const [isDarkMode, setIsDarkMode] = useDarkMode();

  const divElementRef = useRef<HTMLDivElement>(null);

  const intervalRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    const id = setInterval(() => {});
    intervalRef.current = id;
    return () => {
      clearInterval(intervalRef.current);
    };
  });

  return (
      <div ref={divElementRef}>
        <button onClick={() => setIsDarkMode((prevState) => !prevState)}>
          Toggle Dark Mode
        </button>
        <div>Theme: {isDarkMode ? "dark" : "light"}</div>
      </div>
  );
};

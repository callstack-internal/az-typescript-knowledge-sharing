import { useRef, useState } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return [isDarkMode, setIsDarkMode] as const;
};

export const TypingReactAPI = () => {
  const [name, setName] = useState();

  const [isDarkMode, setIsDarkMode] = useDarkMode();

  const divElementRef = useRef<HTMLDivElement>(null);

  const anotherRef = useRef();

  return (
    <div ref={divElementRef}>
      <button onClick={() => setIsDarkMode((prevState) => !prevState)}>
        Toggle Dark Mode
      </button>
    </div>
  );
};

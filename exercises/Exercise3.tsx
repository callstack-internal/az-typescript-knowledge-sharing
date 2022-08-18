import {useEffect, useRef, useState} from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return [isDarkMode, setIsDarkMode];
};

export const TypingReactAPI = () => {
  const [name, setName] = useState();

  const [isDarkMode, setIsDarkMode] = useDarkMode();

  const divElementRef = useRef(null);

  const intervalRef = useRef();

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
      </div>
  );
};

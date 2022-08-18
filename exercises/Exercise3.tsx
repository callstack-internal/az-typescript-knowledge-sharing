import { useRef, useState } from "react";

const useEdek = () => {
  const [x, setX] = useState("");

  const returnValue = [x, setX];

  return returnValue;
};

export const TypingReactAPI = () => {
  const [name, setName] = useState();

  const [x, setX] = useEdek();

  setX("bob");

  const divElementRef = useRef();

  return <div ref={divElementRef}></div>;
};

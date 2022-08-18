import { useRef } from "react";

const foo = "this is a string";

let bar = "this is another string";

export const CheckType = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const element = document.getElementById("test");

  const date = new Date();

  const anotherDate = Date();

  return (
    <div id="test" ref={ref}>
      Edek
    </div>
  );
};

function formatName(name = "Bob") {
  return name.toLocaleUpperCase();
}

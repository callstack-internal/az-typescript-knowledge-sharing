import React from "react";

export const TypingEvents = () => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.keyCode === 13) {
      console.log("do something");
    }
  };

  let resizeObserver: ResizeObserver | undefined = undefined;

  if (typeof ResizeObserver !== "undefined") {
    resizeObserver = new ResizeObserver(() => {});
  } else {
    resizeObserver = undefined;
  }

  return (
    <div>
      <button onClick={onClick} onKeyDown={onKeyDown}>
        Click!
      </button>
    </div>
  );
};

type Props = {
  cart: any;
  user: any;
};

export const TypingEvents = (props: Props) => {
  const onClick = (e) => {
    console.log(e);
  };

  const onKeyDown = (e) => {
    if (e.keycode === 13) {
      console.log("do something");
    }
  };

  let resizeObserver = undefined;

  if (typeof ResizeObserver !== "undefined") {
    resizeObserver = new ResizeObserver(() => {});
  } else {
    resizeObserver = undefined;
  }

  return (
    <div>
      <div>
        User: {props.user.name}, membership status:{" "}
        {props.user.membershipStatus}
      </div>
      <div>
        Cart: {props.cart.items.length}, Total Price: {props.cart.totalPrice}
      </div>
      <button onClick={onClick} onKeyDown={onKeyDown}>
        Click!
      </button>
    </div>
  );
};

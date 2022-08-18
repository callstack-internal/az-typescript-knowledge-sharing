import { useRef, useState } from "react";

type Props = {
  cart: any;
  user: any;
};

export const TypingReactAPI = (props: Props) => {
  const [x, setX] = useState("edek");
  const ref = useRef();

  return (
    <div ref={ref}>
      <div>
        User: {props.user.name}, membership status:{" "}
        {props.user.membershipStatus}
      </div>
      <div>
        <div>Cart</div>
        <div>Item count: {props.cart.items.length}</div>
        <div>Total Price: {props.cart.totalPrice}</div>
      </div>
    </div>
  );
};

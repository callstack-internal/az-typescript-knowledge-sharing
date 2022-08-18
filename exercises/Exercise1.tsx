type Props = {
  cart: any;
  user: any;
};

export const BrokenComponent = (props: Props) => {
  return (
    <div>
      <div>
        User: {props.user.name}, membership status:{" "}
        {props.user.membershipStatus}
      </div>
      <div>
        Cart: {props.cart.item.length}, Total Price: {props.cart.totalprice}
      </div>
    </div>
  );
};

const ParentComponent = () => {
  const cart = { items: [{ id: "", name: "", price: 5 }], totalPrice: 55 };
  const user = {
    firstName: "Bob",
    lastName: "McDonald",
    membershipStatus: "premium",
  };

  return <BrokenComponent cart={cart} user={user} />;
};

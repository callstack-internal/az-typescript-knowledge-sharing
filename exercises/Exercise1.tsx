type Cart = {
  items: Array<{ id: string; name: string; price: number }>;
  totalPrice: number;
};

type User = {
  firstName: string;
  lastName: string;
  membershipStatus: "normal" | "premium";
};

type Props = {
  cart: Cart;
  user: User;
};

export const BrokenComponent = ({ user, cart }: Props) => {
  return (
    <div>
      <div>
        User: {user.firstName} {user.lastName}, membership status:{" "}
        {user.membershipStatus}
      </div>
      <div>
        Cart: {cart.items.length}, Total Price: {cart.totalPrice}
      </div>
    </div>
  );
};

const ParentComponent = () => {
  const cart = {
    items: [
      { id: "123", name: "Oil", price: 5 },
      { id: "763", name: "Brake Pads", price: 50 },
    ],
    totalPrice: 55,
  };
  const user = {
    firstName: "Bob",
    lastName: "McDonald",
    membershipStatus: "premium",
  } as const;

  return <BrokenComponent cart={cart} user={user} />;
};

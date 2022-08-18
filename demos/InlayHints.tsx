const clients = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 33 },
];

export const ClientList = () => {
  return (
    <div>
      {clients.map((client) => (
        <div key={client.id}>
          Name: {client.name} is {client.age} years old.
        </div>
      ))}
    </div>
  );
};

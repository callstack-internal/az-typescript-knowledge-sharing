import { useRouter } from "next/router";

type Oil = { name: string; price: number; capacity: number };

type Battery = { name: string; price: number; weight: number };

type Props = {
  data: { name: string; age: number } | undefined;
  product: Oil | Battery;
};

export const TypeNarrowing = ({ data, product }: Props) => {
  const router = useRouter();
  const routerQuery = router.query;
  const testQueryParam = routerQuery.test;

  if (typeof testQueryParam === "string") {
    console.log(testQueryParam);
  }

  if ("capacity" in product) {
    console.log(product);
    console.log("I'm Oil!");
  }

  if ("weight" in product) {
    console.log(product);
    console.log("I'm Battery!");
  }

  // data can be undefined
  const name = data.name;

  if (!data) {
    return <div>Placeholder</div>;
  }

  // type of data was narrowed down to object value
  return <div>Name: {data.name}</div>;
};

type Fish = {name: string; swim: () => void};

type Bird = {name: string; fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
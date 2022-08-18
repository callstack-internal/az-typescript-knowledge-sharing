import { useRouter } from "next/router";

type Props = {
  data: { name: string; age: number } | undefined;
};

export const TypeNarrowing = (props: Props) => {
  const router = useRouter();
  const routerQuery = router.query;
  const testQueryParam = routerQuery.test;

  if (typeof testQueryParam === "string") {
    console.log(testQueryParam);
  }

  // data can be undefined
  const name = props.data.name;

  if (!props.data) {
    return <div>Placeholder</div>;
  }

  // type of data was narrowed down to object value
  return <div>Name: {props.data.name}</div>;
};

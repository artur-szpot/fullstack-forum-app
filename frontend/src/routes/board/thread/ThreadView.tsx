import { useSearchParams } from "react-router";

export const ThreadView = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  return <h1>{`Thread view: ID = ${id}`}</h1>;
};

import { useSearchParams } from "react-router";

export const ForumView = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  return <h1>{`Forum view: ID = ${id}`}</h1>;
};

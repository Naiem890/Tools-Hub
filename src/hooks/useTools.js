import { useQuery } from "react-query";

const useTools = () => {
  const { isLoading, error, data } = useQuery(
    "tools",
    async () =>
      await fetch("http://localhost:5000/tools").then((res) => res.json())
  );

  return { isLoading, error, data };
};

export default useTools;
